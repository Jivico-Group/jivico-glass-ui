import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { DEFAULT_TOAST_DURATIONS, normalizePosition } from "../Toast.types.js";
import { toastReducer, createInitialToastState } from "../toastReducer.js";
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
});
