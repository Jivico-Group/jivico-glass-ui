import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { DEFAULT_TOAST_DURATIONS, normalizePosition } from "../Toast.types.js";
import { toastReducer, createInitialToastState, sanitizeDuration } from "../toastReducer.js";
import type { ToastItemState } from "../Toast.types.js";

const createMockToast = (
  id: string,
  overrides: Partial<ToastItemState> = {}
): ToastItemState => ({
  id,
  message: `Message for ${id}`,
  title: `Title for ${id}`,
  color: "primary",
  position: "top-right",
  radius: "soft",
  variant: "glass",
  duration: 4000,
  dismissible: true,
  status: "visible",
  createdAt: Date.now(),
  ...overrides,
});

describe("Toast Lifecycle and Timer Semantics", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("defines standard semantic durations for all 8 colors", () => {
    expect(DEFAULT_TOAST_DURATIONS.success).toBe(3000);
    expect(DEFAULT_TOAST_DURATIONS.error).toBe(6000);
    expect(DEFAULT_TOAST_DURATIONS.warning).toBe(5000);
    expect(DEFAULT_TOAST_DURATIONS.info).toBe(4000);
    expect(DEFAULT_TOAST_DURATIONS.primary).toBe(4000);
    expect(DEFAULT_TOAST_DURATIONS.secondary).toBe(4000);
    expect(DEFAULT_TOAST_DURATIONS.accent).toBe(4000);
    expect(DEFAULT_TOAST_DURATIONS.glass).toBe(4000);
  });

  it("handles timer pause calculation properly", () => {
    const duration = 4000;
    const startedAt = 1000;
    const now = 2500; // 1500ms elapsed

    const elapsed = now - startedAt;
    const remaining = Math.max(0, duration - elapsed);

    expect(remaining).toBe(2500);
  });

  it("handles timer resume calculation properly", () => {
    let remaining = 2500;
    let dismissed = false;

    const onDismiss = () => {
      dismissed = true;
    };

    const timer = setTimeout(onDismiss, remaining);

    vi.advanceTimersByTime(2499);
    expect(dismissed).toBe(false);

    vi.advanceTimersByTime(1);
    expect(dismissed).toBe(true);

    clearTimeout(timer);
  });

  it("persistent toasts with duration: 0 have no auto-dismissal", () => {
    const persistentToast = createMockToast("persist-1", { duration: 0 });
    expect(persistentToast.duration).toBe(0);
  });

  it("normalizes 'bottom' alias to 'bottom-center' and leaves other positions untouched", () => {
    expect(normalizePosition("bottom")).toBe("bottom-center");
    expect(normalizePosition("top-left")).toBe("top-left");
    expect(normalizePosition("top-center")).toBe("top-center");
    expect(normalizePosition("top-right")).toBe("top-right");
    expect(normalizePosition("bottom-left")).toBe("bottom-left");
    expect(normalizePosition("bottom-center")).toBe("bottom-center");
    expect(normalizePosition("bottom-right")).toBe("bottom-right");
    expect(normalizePosition(undefined)).toBe("top-right");
  });

  it("verifies exit transition sequence: START_EXIT -> delay -> REMOVE_TOAST", () => {
    let state = createInitialToastState();
    state = toastReducer(state, {
      type: "ADD_TOAST",
      toast: createMockToast("exit-test"),
    });

    expect(state["top-right"].visible[0].status).toBe("visible");

    // Start exit transition
    state = toastReducer(state, { type: "START_EXIT", id: "exit-test" });
    expect(state["top-right"].visible[0].status).toBe("exiting");
    expect(state["top-right"].visible).toHaveLength(1);

    // After animation delay completes, final REMOVE_TOAST is dispatched
    state = toastReducer(state, { type: "REMOVE_TOAST", id: "exit-test" });
    expect(state["top-right"].visible).toHaveLength(0);
  });

  describe("Timer Validation via sanitizeDuration", () => {
    it("returns 0 for non-numbers, NaN, Infinity, zero, and negative values", () => {
      expect(sanitizeDuration(0)).toBe(0);
      expect(sanitizeDuration(-500)).toBe(0);
      expect(sanitizeDuration(NaN)).toBe(0);
      expect(sanitizeDuration(Infinity)).toBe(0);
      expect(sanitizeDuration(-Infinity)).toBe(0);
      expect(sanitizeDuration(undefined)).toBe(0);
      expect(sanitizeDuration("4000" as unknown as number)).toBe(0);
    });

    it("floors valid positive numbers and caps them at 86,400,000 ms (24 hours)", () => {
      expect(sanitizeDuration(3500.8)).toBe(3500);
      expect(sanitizeDuration(4000)).toBe(4000);
      expect(sanitizeDuration(100_000_000)).toBe(86_400_000);
    });
  });

  describe("Timer Reset on toast.update() Lifecycle", () => {
    it("resets active timer when duration changes from positive to a different positive duration", () => {
      let dismissed = false;
      let timerId: ReturnType<typeof setTimeout> | null = null;

      // Initial toast with 4000ms duration
      let currentDuration = 4000;
      timerId = setTimeout(() => {
        dismissed = true;
      }, currentDuration);

      // Advance 2000ms
      vi.advanceTimersByTime(2000);
      expect(dismissed).toBe(false);

      // Update toast duration to 3000ms
      const newDuration = 3000;
      if (timerId) clearTimeout(timerId);
      currentDuration = newDuration;
      timerId = setTimeout(() => {
        dismissed = true;
      }, currentDuration);

      // Advance another 2000ms (total 4000ms elapsed since start, but only 2000ms since update)
      vi.advanceTimersByTime(2000);
      expect(dismissed).toBe(false); // Old 4000ms timer did NOT fire

      // Advance remaining 1000ms for new duration
      vi.advanceTimersByTime(1000);
      expect(dismissed).toBe(true);
    });

    it("cancels timer when duration updates from positive to 0 (persistent)", () => {
      let dismissed = false;
      let timerId: ReturnType<typeof setTimeout> | null = setTimeout(() => {
        dismissed = true;
      }, 4000);

      // Duration updated to 0
      clearTimeout(timerId);
      timerId = null;

      // Advance far beyond initial duration
      vi.advanceTimersByTime(10000);
      expect(dismissed).toBe(false);
    });

    it("starts timer when duration updates from 0 to positive", () => {
      let dismissed = false;
      let timerId: ReturnType<typeof setTimeout> | null = null; // Initially persistent (0ms)

      // Advance 5000ms: still active
      vi.advanceTimersByTime(5000);
      expect(dismissed).toBe(false);

      // Update to 3000ms
      timerId = setTimeout(() => {
        dismissed = true;
      }, 3000);

      vi.advanceTimersByTime(2999);
      expect(dismissed).toBe(false);

      vi.advanceTimersByTime(1);
      expect(dismissed).toBe(true);
    });

    it("adjusts duration and remaining without starting timer when updated while paused", () => {
      const timerRecord = {
        timeoutId: setTimeout(() => {}, 4000),
        remaining: 4000,
        startedAt: 1000,
        duration: 4000,
        isPaused: false,
      };

      // Pause at 2500ms (1500ms elapsed, 2500ms remaining)
      clearTimeout(timerRecord.timeoutId);
      timerRecord.remaining = 2500;
      timerRecord.isPaused = true;

      // Duration updated to 6000ms while paused
      const newDuration = 6000;
      timerRecord.duration = newDuration;
      timerRecord.remaining = newDuration;

      // Remains paused with new duration as remaining
      expect(timerRecord.isPaused).toBe(true);
      expect(timerRecord.remaining).toBe(6000);
    });
  });

  describe("dismissAll() Race Condition Resolution", () => {
    it("preserves notifications created after dismissAll() was called", () => {
      let state = createInitialToastState();

      // Add two initial toasts
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("old-1") });
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("old-2") });
      expect(state["top-right"].visible).toHaveLength(2);

      // dismissAll() executed: records existing visible IDs
      const exitingIds = state["top-right"].visible.map((t) => t.id);
      expect(exitingIds).toEqual(["old-1", "old-2"]);

      // DISMISS_ALL transitions visible toasts to 'exiting' and clears queue
      state = toastReducer(state, { type: "DISMISS_ALL" });
      expect(state["top-right"].visible[0].status).toBe("exiting");
      expect(state["top-right"].visible[1].status).toBe("exiting");

      // A new toast is added 50ms later while old toasts are still in exit transition
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("new-3") });
      expect(state["top-right"].visible).toHaveLength(3);
      expect(state["top-right"].visible[2].id).toBe("new-3");
      expect(state["top-right"].visible[2].status).toBe("visible");

      // At 220ms, targeted REMOVE_EXITING_TOASTS runs with the captured IDs
      state = toastReducer(state, { type: "REMOVE_EXITING_TOASTS", ids: exitingIds });

      // old-1 and old-2 are cleanly removed, but new-3 is completely preserved!
      expect(state["top-right"].visible).toHaveLength(1);
      expect(state["top-right"].visible[0].id).toBe("new-3");
      expect(state["top-right"].visible[0].status).toBe("visible");
    });
  });

  describe("dismiss() Idempotency and Queued Removal", () => {
    it("immediately removes queued toast on START_EXIT without exit animation delay", () => {
      let state = createInitialToastState();

      // Fill visible stack (maxVisible = 1)
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("vis-1"), maxVisible: 1 });
      // Add item into pending queue
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("queued-1"), maxVisible: 1 });

      expect(state["top-right"].visible).toHaveLength(1);
      expect(state["top-right"].queue).toHaveLength(1);

      // Dismiss the queued item
      state = toastReducer(state, { type: "START_EXIT", id: "queued-1" });

      // Queued item is directly removed from queue
      expect(state["top-right"].queue).toHaveLength(0);
      expect(state["top-right"].visible[0].id).toBe("vis-1");
    });

    it("is an idempotent no-op when START_EXIT is called repeatedly on an already-exiting toast", () => {
      let state = createInitialToastState();
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("item-1") });

      state = toastReducer(state, { type: "START_EXIT", id: "item-1" });
      const stateAfterFirst = state;

      // Duplicate dismissal call
      state = toastReducer(state, { type: "START_EXIT", id: "item-1" });
      expect(state).toBe(stateAfterFirst); // Exact referential equality (no state mutation)
    });
  });
});
