import React from "react";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { COLORS } from "../../../theme/colors/index.js";
import { useToast } from "../ToastContext.js";
import { ToastItem } from "../ToastItem.js";
import { ToastProvider } from "../ToastProvider.js";
import { createInitialToastState, sanitizeDuration, toastReducer } from "../toastReducer.js";
import type { ToastApi, ToastItemState, ToastOptions } from "../Toast.types.js";

const createMockToast = (id: string, overrides: Partial<ToastItemState> = {}): ToastItemState => ({
  id,
  message: `Message for ${id}`,
  title: `Title for ${id}`,
  color: "primary",
  position: "top-right",
  radius: "soft",
  variant: "glass",
  duration: 3000,
  dismissible: true,
  status: "visible",
  createdAt: Date.now(),
  revision: 0,
  ...overrides,
});

describe("Jivico Glass UI — Final Correction & Regression Hardening", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Section 2: Timer Reset & Revision Lifecycle Tracking", () => {
    it("increments revision counter on UPDATE_TOAST even when duration is identical", () => {
      let state = createInitialToastState();
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("toast-1", { duration: 3000, revision: 0 }) });

      expect(state["top-right"].visible[0].revision).toBe(0);
      expect(state["top-right"].visible[0].duration).toBe(3000);

      // Update with identical duration (3000ms)
      state = toastReducer(state, { type: "UPDATE_TOAST", id: "toast-1", updates: { message: "Upload completed", color: "success", duration: 3000 } });

      // Revision increments from 0 to 1, providing revision-based reset detection
      expect(state["top-right"].visible[0].revision).toBe(1);
      expect(state["top-right"].visible[0].duration).toBe(3000);
      expect(state["top-right"].visible[0].message).toBe("Upload completed");
      expect(state["top-right"].visible[0].color).toBe("success");
    });

    it("increments revision counter when duration changes to a different positive number", () => {
      let state = createInitialToastState();
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("toast-2", { duration: 4000, revision: 0 }) });

      state = toastReducer(state, { type: "UPDATE_TOAST", id: "toast-2", updates: { duration: 6000 } });

      expect(state["top-right"].visible[0].revision).toBe(1);
      expect(state["top-right"].visible[0].duration).toBe(6000);
    });

    it("handles transition from positive duration to zero (persistent)", () => {
      let state = createInitialToastState();
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("toast-3", { duration: 5000 }) });

      state = toastReducer(state, { type: "UPDATE_TOAST", id: "toast-3", updates: { duration: 0 } });

      expect(state["top-right"].visible[0].duration).toBe(0);
      expect(state["top-right"].visible[0].revision).toBe(1);
    });

    it("handles transition from zero (persistent) to positive duration", () => {
      let state = createInitialToastState();
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("toast-4", { duration: 0 }) });

      state = toastReducer(state, { type: "UPDATE_TOAST", id: "toast-4", updates: { duration: 4000 } });

      expect(state["top-right"].visible[0].duration).toBe(4000);
      expect(state["top-right"].visible[0].revision).toBe(1);
    });

    it("preserves revision tracking when migrating a toast to a different position", () => {
      let state = createInitialToastState();
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("toast-5", { position: "top-right", revision: 2 }) });

      state = toastReducer(state, { type: "UPDATE_TOAST", id: "toast-5", updates: { position: "bottom-center" } });

      expect(state["top-right"].visible).toHaveLength(0);
      expect(state["bottom-center"].visible).toHaveLength(1);
      expect(state["bottom-center"].visible[0].id).toBe("toast-5");
      expect(state["bottom-center"].visible[0].revision).toBe(3);
    });

    it("preserves status='queued' and does not start timer while toast is in queue", () => {
      let state = createInitialToastState();
      // Fill visible slots (maxVisible: 1)
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("vis-1"), maxVisible: 1 });
      // Add queued toast
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("queued-1", { duration: 5000 }), maxVisible: 1 });

      expect(state["top-right"].queue[0].status).toBe("queued");
      expect(state["top-right"].queue[0].revision).toBe(0);

      // Update queued toast
      state = toastReducer(state, { type: "UPDATE_TOAST", id: "queued-1", updates: { message: "Queued update", duration: 7000 }, maxVisible: 1 });

      expect(state["top-right"].queue[0].status).toBe("queued");
      expect(state["top-right"].queue[0].message).toBe("Queued update");
      expect(state["top-right"].queue[0].duration).toBe(7000);
      expect(state["top-right"].queue[0].revision).toBe(1);
    });

    it("does not resurrect or restart exit animation when updating an exiting toast", () => {
      let state = createInitialToastState();
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("exit-1") });

      state = toastReducer(state, { type: "START_EXIT", id: "exit-1" });
      expect(state["top-right"].visible[0].status).toBe("exiting");

      // Update toast while exiting
      state = toastReducer(state, { type: "UPDATE_TOAST", id: "exit-1", updates: { message: "Should not resurrect" } });

      // Status remains exiting
      expect(state["top-right"].visible[0].status).toBe("exiting");
      expect(state["top-right"].visible[0].message).toBe("Should not resurrect");
    });
  });

  describe("Section 3 & 4: Batched Synchronous Commands and Lifecycle Integrity", () => {
    it("preserves newly created toasts following synchronous dismissAll() calls", () => {
      let state = createInitialToastState();

      // 1. toast.success("First")
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("first") });
      expect(state["top-right"].visible).toHaveLength(1);

      // 2. toast.dismissAll()
      state = toastReducer(state, { type: "DISMISS_ALL" });
      expect(state["top-right"].visible[0].id).toBe("first");
      expect(state["top-right"].visible[0].status).toBe("exiting");

      // 3. toast.success("Second")
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("second") });
      expect(state["top-right"].visible).toHaveLength(2);
      expect(state["top-right"].visible[0].id).toBe("first");
      expect(state["top-right"].visible[0].status).toBe("exiting");
      expect(state["top-right"].visible[1].id).toBe("second");
      expect(state["top-right"].visible[1].status).toBe("visible");

      // When the exit animation for "first" completes (REMOVE_TOAST for "first")
      state = toastReducer(state, { type: "REMOVE_TOAST", id: "first" });

      // "first" is removed, but "second" strictly survives!
      expect(state["top-right"].visible).toHaveLength(1);
      expect(state["top-right"].visible[0].id).toBe("second");
      expect(state["top-right"].visible[0].status).toBe("visible");
    });

    it("handles synchronous create followed by immediate dismiss cleanly", () => {
      let state = createInitialToastState();

      // Synchronous creation followed immediately by dismissal
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("immediate-dismiss") });
      state = toastReducer(state, { type: "START_EXIT", id: "immediate-dismiss" });

      expect(state["top-right"].visible).toHaveLength(1);
      expect(state["top-right"].visible[0].status).toBe("exiting");

      // After 220ms exit transition
      state = toastReducer(state, { type: "REMOVE_TOAST", id: "immediate-dismiss" });
      expect(state["top-right"].visible).toHaveLength(0);
    });

    it("is strictly idempotent on repeated calls to dismiss() and dismissAll()", () => {
      let state = createInitialToastState();
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("item-a") });

      state = toastReducer(state, { type: "DISMISS_ALL" });
      const state1 = state;
      // Second dismissAll call on already-exiting stack
      state = toastReducer(state, { type: "DISMISS_ALL" });
      expect(state["top-right"].visible[0].status).toBe("exiting");

      // Repeated START_EXIT on exiting toast
      state = toastReducer(state, { type: "START_EXIT", id: "item-a" });
      expect(state["top-right"].visible[0].status).toBe("exiting");
    });
  });

  describe("Section 7: Exact Toast Radius Enforcement", () => {
    it("enforces soft radius = exactly 4px", () => {
      const toast = createMockToast("radius-soft", { radius: "soft" });
      const html = renderToString(<ToastItem item={toast} onDismiss={() => {}} />);

      // Emotion style tag contains border-radius: 4px
      expect(html).toContain("border-radius:4px");
    });

    it("enforces rounded radius = exactly 9999px", () => {
      const toast = createMockToast("radius-rounded", { radius: "rounded" });
      const html = renderToString(<ToastItem item={toast} onDismiss={() => {}} />);

      expect(html).toContain("border-radius:9999px");
    });

    it("enforces square radius = exactly 0px", () => {
      const toast = createMockToast("radius-square", { radius: "square" });
      const html = renderToString(<ToastItem item={toast} onDismiss={() => {}} />);

      expect(html).toContain("border-radius:0px");
    });
  });

  describe("Section 8: Alignment with Jivico Glass Theme Palette", () => {
    it("renders accent toast using Jivico warm gold accent palette (#937447)", () => {
      const toast = createMockToast("color-accent", { color: "accent" });
      const html = renderToString(<ToastItem item={toast} onDismiss={() => {}} />);

      // Verified Jivico accent token #937447 is present
      expect(html).toContain(COLORS.accent.light);
      expect(html).not.toContain("#A855F7"); // Legacy arbitrary purple rejected
    });

    it("renders success, error, warning, and info with Jivico semantic theme colors", () => {
      const successHtml = renderToString(<ToastItem item={createMockToast("s", { color: "success" })} onDismiss={() => {}} />);
      expect(successHtml).toContain(COLORS.success.light);

      const errorHtml = renderToString(<ToastItem item={createMockToast("e", { color: "error" })} onDismiss={() => {}} />);
      expect(errorHtml).toContain(COLORS.error.light);

      const warningHtml = renderToString(<ToastItem item={createMockToast("w", { color: "warning" })} onDismiss={() => {}} />);
      expect(warningHtml).toContain(COLORS.warning.light);

      const infoHtml = renderToString(<ToastItem item={createMockToast("i", { color: "info" })} onDismiss={() => {}} />);
      expect(infoHtml).toContain(COLORS.info.light);
    });
  });

  describe("Section 9: Notification IDs, Admission and Overflow Consistency", () => {
    it("falls back to default duration when negative or invalid duration is passed, preventing accidental persistence", () => {
      // sanitizeDuration with negative number uses fallback
      expect(sanitizeDuration(-500, 4000)).toBe(4000);
      expect(sanitizeDuration(NaN, 5000)).toBe(5000);
      expect(sanitizeDuration(undefined, 3000)).toBe(3000);

      // Explicit duration: 0 is preserved as persistent
      expect(sanitizeDuration(0, 4000)).toBe(0);
    });

    it("protects persistent notifications in pending queue from silent eviction", () => {
      let state = createInitialToastState();

      // Fill visible slots (maxVisible: 1)
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("vis-1"), maxVisible: 1, maxPending: 2 });

      // Fill queue with persistent notifications (duration: 0)
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("persist-q1", { duration: 0 }), maxVisible: 1, maxPending: 2 });
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("persist-q2", { duration: 0 }), maxVisible: 1, maxPending: 2 });

      expect(state["top-right"].queue).toHaveLength(2);
      expect(state["top-right"].queue[0].id).toBe("persist-q1");
      expect(state["top-right"].queue[1].id).toBe("persist-q2");

      // Attempt to add a 3rd toast when all queued items are persistent
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("incoming-toast", { duration: 3000 }), maxVisible: 1, maxPending: 2 });

      // Persistent queue items are strictly protected from silent eviction!
      expect(state["top-right"].queue).toHaveLength(2);
      expect(state["top-right"].queue[0].id).toBe("persist-q1");
      expect(state["top-right"].queue[1].id).toBe("persist-q2");
    });

    it("evicts oldest non-persistent item when pending queue reaches capacity", () => {
      let state = createInitialToastState();

      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("vis-1"), maxVisible: 1, maxPending: 2 });

      // Add one non-persistent and one persistent item to queue
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("non-persist-1", { duration: 3000 }), maxVisible: 1, maxPending: 2 });
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("persist-1", { duration: 0 }), maxVisible: 1, maxPending: 2 });

      // Incoming item forces eviction of non-persistent item
      state = toastReducer(state, { type: "ADD_TOAST", toast: createMockToast("incoming", { duration: 4000 }), maxVisible: 1, maxPending: 2 });

      expect(state["top-right"].queue).toHaveLength(2);
      expect(state["top-right"].queue.some((t) => t.id === "persist-1")).toBe(true);
      expect(state["top-right"].queue.some((t) => t.id === "incoming")).toBe(true);
      expect(state["top-right"].queue.some((t) => t.id === "non-persist-1")).toBe(false);
    });

    it("rejects admission when custom ID conflicts with an existing notification", () => {
      let capturedApi: ToastApi | null = null;

      function Consumer() {
        const toast = useToast();
        capturedApi = toast;
        return <div>Ready</div>;
      }

      renderToString(
        <ToastProvider portal={false}>
          <Consumer />
        </ToastProvider>,
      );

      const id1 = capturedApi!.show({ id: "custom-unique", message: "First" });
      expect(id1).toBe("custom-unique");

      // Attempt to show with same ID
      const id2 = capturedApi!.show({ id: "custom-unique", message: "Conflict" });
      expect(id2).toBe(""); // Rejected admission returns empty string sentinel
    });

    it("rejects admission when maxPending === 0 and visible slots are full", () => {
      let capturedApi: ToastApi | null = null;

      function Consumer() {
        const toast = useToast();
        capturedApi = toast;
        return <div>Ready</div>;
      }

      renderToString(
        <ToastProvider portal={false} maxVisible={1} maxPending={0}>
          <Consumer />
        </ToastProvider>,
      );

      const id1 = capturedApi!.success("First");
      expect(typeof id1).toBe("string");
      expect(id1.length).toBeGreaterThan(0);

      // Since maxPending === 0 and maxVisible === 1, second notification cannot be admitted
      const id2 = capturedApi!.success("Second");
      expect(id2).toBe("");
    });
  });
});
