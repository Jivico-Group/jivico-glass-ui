import { describe, it, expect } from "vitest";
import {
  createInitialToastState,
  toastReducer,
  ALL_POSITIONS,
} from "../toastReducer.js";
import type { ToastItemState } from "../Toast.types.js";

const createMockToast = (
  id: string,
  overrides: Partial<Omit<ToastItemState, "status">> = {}
): Omit<ToastItemState, "status"> => ({
  id,
  message: `Toast message ${id}`,
  title: `Title ${id}`,
  color: "primary",
  position: "top-right",
  radius: "soft",
  variant: "glass",
  duration: 4000,
  dismissible: true,
  createdAt: Date.now(),
  ...overrides,
});

describe("toastReducer", () => {
  it("initializes with 6 empty positional stacks", () => {
    const initialState = createInitialToastState();
    expect(ALL_POSITIONS).toHaveLength(6);
    for (const pos of ALL_POSITIONS) {
      expect(initialState[pos]).toBeDefined();
      expect(initialState[pos].visible).toEqual([]);
      expect(initialState[pos].queue).toEqual([]);
    }
  });

  describe("ADD_TOAST", () => {
    it("adds toast to visible stack up to maxVisible (default 3) in FIFO order", () => {
      let state = createInitialToastState();

      const t1 = createMockToast("1");
      const t2 = createMockToast("2");
      const t3 = createMockToast("3");

      state = toastReducer(state, { type: "ADD_TOAST", toast: t1 });
      state = toastReducer(state, { type: "ADD_TOAST", toast: t2 });
      state = toastReducer(state, { type: "ADD_TOAST", toast: t3 });

      const topright = state["top-right"];
      expect(topright.visible).toHaveLength(3);
      expect(topright.visible.map((t) => t.id)).toEqual(["1", "2", "3"]);
      expect(topright.visible.every((t) => t.status === "visible")).toBe(true);
      expect(topright.queue).toHaveLength(0);
    });

    it("enqueues 4th toast and beyond into FIFO queue when maxVisible is reached", () => {
      let state = createInitialToastState();

      for (let i = 1; i <= 5; i++) {
        state = toastReducer(state, {
          type: "ADD_TOAST",
          toast: createMockToast(String(i)),
        });
      }

      const topright = state["top-right"];
      expect(topright.visible).toHaveLength(3);
      expect(topright.visible.map((t) => t.id)).toEqual(["1", "2", "3"]);
      expect(topright.queue).toHaveLength(2);
      expect(topright.queue.map((t) => t.id)).toEqual(["4", "5"]);
      expect(topright.queue.every((t) => t.status === "queued")).toBe(true);
    });

    it("maintains independent stacks for each position", () => {
      let state = createInitialToastState();

      const trToast = createMockToast("tr-1", { position: "top-right" });
      const bcToast = createMockToast("bc-1", { position: "bottom-center" });
      const tlToast = createMockToast("tl-1", { position: "top-left" });

      state = toastReducer(state, { type: "ADD_TOAST", toast: trToast });
      state = toastReducer(state, { type: "ADD_TOAST", toast: bcToast });
      state = toastReducer(state, { type: "ADD_TOAST", toast: tlToast });

      expect(state["top-right"].visible).toHaveLength(1);
      expect(state["bottom-center"].visible).toHaveLength(1);
      expect(state["top-left"].visible).toHaveLength(1);
      expect(state["bottom-right"].visible).toHaveLength(0);
    });

    it("prevents duplicate toast IDs from being added", () => {
      let state = createInitialToastState();
      const t1 = createMockToast("dup-1");

      state = toastReducer(state, { type: "ADD_TOAST", toast: t1 });
      const stateAfterDup = toastReducer(state, { type: "ADD_TOAST", toast: t1 });

      expect(stateAfterDup).toBe(state);
      expect(stateAfterDup["top-right"].visible).toHaveLength(1);
    });

    it("enforces maxPending bound by dropping oldest non-persistent item first", () => {
      let state = createInitialToastState();

      // Fill visible (3)
      for (let i = 1; i <= 3; i++) {
        state = toastReducer(state, {
          type: "ADD_TOAST",
          toast: createMockToast(`vis-${i}`),
          maxVisible: 3,
        });
      }

      // Add 2 queued: first is non-persistent (duration > 0), second is persistent (duration 0)
      state = toastReducer(state, {
        type: "ADD_TOAST",
        toast: createMockToast("q-normal-1", { duration: 3000 }),
        maxVisible: 3,
        maxPending: 2,
      });
      state = toastReducer(state, {
        type: "ADD_TOAST",
        toast: createMockToast("q-persist-2", { duration: 0 }),
        maxVisible: 3,
        maxPending: 2,
      });

      expect(state["top-right"].queue.map((t) => t.id)).toEqual(["q-normal-1", "q-persist-2"]);

      // Exceed maxPending (2): adding 3rd queued item should drop non-persistent "q-normal-1"
      state = toastReducer(state, {
        type: "ADD_TOAST",
        toast: createMockToast("q-normal-3", { duration: 4000 }),
        maxVisible: 3,
        maxPending: 2,
      });

      expect(state["top-right"].queue).toHaveLength(2);
      expect(state["top-right"].queue.map((t) => t.id)).toEqual(["q-persist-2", "q-normal-3"]);
    });
  });

  describe("START_EXIT", () => {
    it("transitions visible toast to exiting status without changing list length", () => {
      let state = createInitialToastState();
      state = toastReducer(state, {
        type: "ADD_TOAST",
        toast: createMockToast("1"),
      });

      expect(state["top-right"].visible[0].status).toBe("visible");

      state = toastReducer(state, { type: "START_EXIT", id: "1" });
      expect(state["top-right"].visible[0].status).toBe("exiting");
      expect(state["top-right"].visible).toHaveLength(1);
    });

    it("directly removes queued toast if START_EXIT is invoked before visibility", () => {
      let state = createInitialToastState();
      for (let i = 1; i <= 4; i++) {
        state = toastReducer(state, {
          type: "ADD_TOAST",
          toast: createMockToast(String(i)),
        });
      }

      expect(state["top-right"].queue.map((t) => t.id)).toEqual(["4"]);

      state = toastReducer(state, { type: "START_EXIT", id: "4" });
      expect(state["top-right"].queue).toHaveLength(0);
    });
  });

  describe("REMOVE_TOAST", () => {
    it("removes toast from visible stack and promotes the next queued toast", () => {
      let state = createInitialToastState();
      for (let i = 1; i <= 4; i++) {
        state = toastReducer(state, {
          type: "ADD_TOAST",
          toast: createMockToast(String(i)),
        });
      }

      expect(state["top-right"].visible.map((t) => t.id)).toEqual(["1", "2", "3"]);
      expect(state["top-right"].queue.map((t) => t.id)).toEqual(["4"]);

      // Remove visible toast "1"
      state = toastReducer(state, { type: "REMOVE_TOAST", id: "1" });

      expect(state["top-right"].visible).toHaveLength(3);
      expect(state["top-right"].visible.map((t) => t.id)).toEqual(["2", "3", "4"]);
      expect(state["top-right"].visible.find((t) => t.id === "4")?.status).toBe("visible");
      expect(state["top-right"].queue).toHaveLength(0);
    });

    it("removes a queued toast cleanly if removed directly", () => {
      let state = createInitialToastState();
      for (let i = 1; i <= 5; i++) {
        state = toastReducer(state, {
          type: "ADD_TOAST",
          toast: createMockToast(String(i)),
        });
      }

      state = toastReducer(state, { type: "REMOVE_TOAST", id: "4" });
      expect(state["top-right"].visible.map((t) => t.id)).toEqual(["1", "2", "3"]);
      expect(state["top-right"].queue.map((t) => t.id)).toEqual(["5"]);
    });
  });

  describe("UPDATE_TOAST", () => {
    it("updates toast properties in-place within the same position", () => {
      let state = createInitialToastState();
      state = toastReducer(state, {
        type: "ADD_TOAST",
        toast: createMockToast("1", { title: "Original Title", color: "info" }),
      });

      state = toastReducer(state, {
        type: "UPDATE_TOAST",
        id: "1",
        updates: { title: "Updated Title", color: "success" },
      });

      const updated = state["top-right"].visible[0];
      expect(updated.title).toBe("Updated Title");
      expect(updated.color).toBe("success");
    });

    it("migrates toast to a new positional stack when position changes and promotes old queue", () => {
      let state = createInitialToastState();

      // Top-right has 4 items (3 visible, 1 queued)
      for (let i = 1; i <= 4; i++) {
        state = toastReducer(state, {
          type: "ADD_TOAST",
          toast: createMockToast(String(i), { position: "top-right" }),
        });
      }

      // Move toast "1" from top-right to bottom-center
      state = toastReducer(state, {
        type: "UPDATE_TOAST",
        id: "1",
        updates: { position: "bottom-center" },
      });

      // Top-right visible should now be 2, 3, and promoted 4
      expect(state["top-right"].visible.map((t) => t.id)).toEqual(["2", "3", "4"]);
      expect(state["top-right"].queue).toHaveLength(0);

      // Bottom-center should now have toast "1"
      expect(state["bottom-center"].visible.map((t) => t.id)).toEqual(["1"]);
      expect(state["bottom-center"].visible[0].position).toBe("bottom-center");
    });
  });

  describe("DISMISS_ALL & CLEAR_ALL_IMMEDIATELY", () => {
    it("marks all visible toasts as exiting and drops queued items for a specific position", () => {
      let state = createInitialToastState();

      // Add to top-right
      for (let i = 1; i <= 4; i++) {
        state = toastReducer(state, {
          type: "ADD_TOAST",
          toast: createMockToast(`tr-${i}`, { position: "top-right" }),
        });
      }

      // Add to bottom-left
      state = toastReducer(state, {
        type: "ADD_TOAST",
        toast: createMockToast("bl-1", { position: "bottom-left" }),
      });

      // Dismiss only top-right
      state = toastReducer(state, { type: "DISMISS_ALL", position: "top-right" });

      expect(state["top-right"].visible.every((t) => t.status === "exiting")).toBe(true);
      expect(state["top-right"].queue).toHaveLength(0);

      // Bottom-left remains untouched
      expect(state["bottom-left"].visible[0].status).toBe("visible");
    });

    it("marks all visible toasts as exiting globally when position is omitted", () => {
      let state = createInitialToastState();

      state = toastReducer(state, {
        type: "ADD_TOAST",
        toast: createMockToast("tr-1", { position: "top-right" }),
      });
      state = toastReducer(state, {
        type: "ADD_TOAST",
        toast: createMockToast("bl-1", { position: "bottom-left" }),
      });

      state = toastReducer(state, { type: "DISMISS_ALL" });

      expect(state["top-right"].visible[0].status).toBe("exiting");
      expect(state["bottom-left"].visible[0].status).toBe("exiting");
    });

    it("resets all positions immediately with CLEAR_ALL_IMMEDIATELY", () => {
      let state = createInitialToastState();

      state = toastReducer(state, {
        type: "ADD_TOAST",
        toast: createMockToast("1"),
      });

      state = toastReducer(state, { type: "CLEAR_ALL_IMMEDIATELY" });

      for (const pos of ALL_POSITIONS) {
        expect(state[pos].visible).toEqual([]);
        expect(state[pos].queue).toEqual([]);
      }
    });
  });
});
