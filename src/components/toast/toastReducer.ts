import { normalizePosition } from "./Toast.types.js";
import type { ToastItemState, ToastOptions, ToastPosition, ToastPositionState, ToastState } from "./Toast.types.js";

export const ALL_POSITIONS: readonly ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
] as const;

export function createInitialToastState(): ToastState {
  return {
    "top-left": { visible: [], queue: [] },
    "top-center": { visible: [], queue: [] },
    "top-right": { visible: [], queue: [] },
    "bottom-left": { visible: [], queue: [] },
    "bottom-center": { visible: [], queue: [] },
    "bottom-right": { visible: [], queue: [] },
  };
}

export type ToastActionType =
  | { type: "ADD_TOAST"; toast: Omit<ToastItemState, "status">; maxVisible?: number; maxPending?: number }
  | { type: "START_EXIT"; id: string }
  | { type: "REMOVE_TOAST"; id: string; maxVisible?: number }
  | { type: "REMOVE_EXITING_TOASTS"; ids: string[]; maxVisible?: number }
  | { type: "UPDATE_TOAST"; id: string; updates: Partial<ToastOptions>; maxVisible?: number; maxPending?: number }
  | { type: "DISMISS_ALL"; position?: ToastPosition }
  | { type: "CLEAR_POSITION"; position: ToastPosition }
  | { type: "CLEAR_ALL_IMMEDIATELY" };

const DEFAULT_MAX_VISIBLE = 3;
const DEFAULT_MAX_PENDING = 20;

function sanitizeMaxVisible(val?: number): number {
  if (typeof val !== "number" || isNaN(val) || !isFinite(val) || val <= 0) return DEFAULT_MAX_VISIBLE;
  return Math.floor(val);
}

function sanitizeMaxPending(val?: number): number {
  if (typeof val !== "number" || isNaN(val) || !isFinite(val) || val < 0) return DEFAULT_MAX_PENDING;
  return Math.floor(val);
}

export function sanitizeDuration(duration?: number, fallback: number = 0): number {
  if (duration === 0) return 0;
  if (typeof duration !== "number" || isNaN(duration) || !isFinite(duration) || duration < 0) {
    return fallback;
  }
  return Math.min(Math.floor(duration), 86_400_000);
}

/**
 * Searches all 6 positional stacks for a toast with the given ID.
 */
export function findToastGlobally(
  state: ToastState,
  id: string,
): { position: ToastPosition; location: "visible" | "queue"; item: ToastItemState; index: number } | null {
  for (const pos of ALL_POSITIONS) {
    const posState = state[pos];
    const visibleIdx = posState.visible.findIndex((t) => t.id === id);
    if (visibleIdx !== -1) return { position: pos, location: "visible", item: posState.visible[visibleIdx]!, index: visibleIdx };
    const queueIdx = posState.queue.findIndex((t) => t.id === id);
    if (queueIdx !== -1) return { position: pos, location: "queue", item: posState.queue[queueIdx]!, index: queueIdx };
  }
  return null;
}

/**
 * Pure, deterministic reducer managing 6 independent FIFO positional toast stacks.
 */
export function toastReducer(state: ToastState, action: ToastActionType): ToastState {
  switch (action.type) {
    case "ADD_TOAST": {
      const { toast, maxVisible, maxPending } = action;
      const safeMaxVisible = sanitizeMaxVisible(maxVisible);
      const safeMaxPending = sanitizeMaxPending(maxPending);
      const pos = toast.position;
      const currentPosState = state[pos];

      // Enforce global ID uniqueness across all 6 positions (visible and queue)
      if (findToastGlobally(state, toast.id)) {
        return state;
      }

      const validatedToast: Omit<ToastItemState, "status"> = {
        ...toast,
        duration: sanitizeDuration(toast.duration),
        revision: toast.revision ?? 0,
      };

      // Check if slot available in visible stack
      if (currentPosState.visible.length < safeMaxVisible) {
        const newVisible: ToastItemState[] = [...currentPosState.visible, { ...validatedToast, status: "visible" }];
        return { ...state, [pos]: { ...currentPosState, visible: newVisible } };
      }

      // If pending queue capacity is 0, do not enqueue
      if (safeMaxPending === 0) return state;

      // Stack full -> Enqueue into FIFO pending queue
      const updatedQueue = [...currentPosState.queue];
      if (updatedQueue.length >= safeMaxPending) {
        // Bounded pending queue policy: Drop the oldest non-persistent item;
        // If all items are persistent, protect them and reject new admission
        const nonPersistentIdx = updatedQueue.findIndex((t) => t.duration > 0);
        if (nonPersistentIdx !== -1) {
          updatedQueue.splice(nonPersistentIdx, 1);
        } else {
          return state;
        }
      }

      updatedQueue.push({ ...validatedToast, status: "queued" });

      return { ...state, [pos]: { ...currentPosState, queue: updatedQueue } };
    }

    case "START_EXIT": {
      const { id } = action;
      const match = findToastGlobally(state, id);
      if (!match) return state;

      const { position: pos, location, index } = match;
      const posState = state[pos];

      if (location === "visible") {
        const currentItem = posState.visible[index]!;
        if (currentItem.status === "exiting") return state; // Already exiting; idempotent no-op

        const nextVisible = [...posState.visible];
        nextVisible[index] = { ...currentItem, status: "exiting" };
        return { ...state, [pos]: { ...posState, visible: nextVisible } };
      }

      // If in queue, directly remove since it never became visible
      const nextQueue = posState.queue.filter((t) => t.id !== id);
      return { ...state, [pos]: { ...posState, queue: nextQueue } };
    }

    case "REMOVE_TOAST": {
      const { id, maxVisible } = action;
      const safeMaxVisible = sanitizeMaxVisible(maxVisible);
      const match = findToastGlobally(state, id);
      if (!match) return state;
      const { position: pos, location } = match;
      const posState = state[pos];

      if (location === "visible") {
        const nextVisible = posState.visible.filter((t) => t.id !== id);
        let nextQueue = [...posState.queue];

        // Promote oldest pending items from FIFO queue in order while slots are available
        while (nextVisible.length < safeMaxVisible && nextQueue.length > 0) {
          const [promotedItem, ...remainingQueue] = nextQueue;
          nextVisible.push({ ...promotedItem!, status: "visible" });
          nextQueue = remainingQueue;
        }

        return { ...state, [pos]: { visible: nextVisible, queue: nextQueue } };
      }

      // If in queue, simply remove from queue
      const nextQueue = posState.queue.filter((t) => t.id !== id);
      return { ...state, [pos]: { ...posState, queue: nextQueue } };
    }

    case "REMOVE_EXITING_TOASTS": {
      const { ids, maxVisible } = action;
      const safeMaxVisible = sanitizeMaxVisible(maxVisible);
      const idSet = new Set(ids);
      let stateChanged = false;
      const nextState = { ...state };

      for (const pos of ALL_POSITIONS) {
        const posState = state[pos];
        const hadMatchingVisible = posState.visible.some((t) => idSet.has(t.id));
        const hadMatchingQueue = posState.queue.some((t) => idSet.has(t.id));

        if (hadMatchingVisible || hadMatchingQueue) {
          const nextVisible = posState.visible.filter((t) => !idSet.has(t.id));
          let nextQueue = posState.queue.filter((t) => !idSet.has(t.id));

          while (nextVisible.length < safeMaxVisible && nextQueue.length > 0) {
            const [promotedItem, ...remainingQueue] = nextQueue;
            nextVisible.push({ ...promotedItem!, status: "visible" });
            nextQueue = remainingQueue;
          }

          nextState[pos] = { visible: nextVisible, queue: nextQueue };
          stateChanged = true;
        }
      }

      return stateChanged ? nextState : state;
    }

    case "UPDATE_TOAST": {
      const { id, updates, maxVisible, maxPending } = action;
      const safeMaxVisible = sanitizeMaxVisible(maxVisible);
      const safeMaxPending = sanitizeMaxPending(maxPending);
      const match = findToastGlobally(state, id);
      if (!match) return state;
      const { position: pos, location, item: currentItem, index } = match;
      const isVisible = location === "visible";
      const newPos = updates.position ? normalizePosition(updates.position) : currentItem.position;

      const duration = updates.duration !== undefined ? sanitizeDuration(updates.duration) : currentItem.duration;

      // If position changed, migrate across positional stacks
      if (newPos !== pos) {
        const nextState = { ...state };
        const oldPosState = state[pos];

        // Remove from old position and promote queue if visible slot freed
        const updatedOldVisible = isVisible ? oldPosState.visible.filter((t) => t.id !== id) : oldPosState.visible;
        let updatedOldQueue = isVisible ? [...oldPosState.queue] : oldPosState.queue.filter((t) => t.id !== id);

        while (isVisible && updatedOldVisible.length < safeMaxVisible && updatedOldQueue.length > 0) {
          const [promoted, ...rest] = updatedOldQueue;
          updatedOldVisible.push({ ...promoted!, status: "visible" });
          updatedOldQueue = rest;
        }

        nextState[pos] = { visible: updatedOldVisible, queue: updatedOldQueue };

        // Construct migrated item
        const updatedItem: ToastItemState = {
          ...currentItem,
          ...updates,
          position: newPos,
          color: updates.color ?? currentItem.color,
          radius: updates.radius ?? currentItem.radius,
          variant: updates.variant ?? currentItem.variant,
          duration,
          dismissible: updates.dismissible !== undefined ? updates.dismissible : currentItem.dismissible,
          status: "queued",
          revision: (currentItem.revision ?? 0) + 1,
        };

        const targetPosState = nextState[newPos];
        if (targetPosState.visible.length < safeMaxVisible) {
          nextState[newPos] = { ...targetPosState, visible: [...targetPosState.visible, { ...updatedItem, status: "visible" }] };
        } else if (safeMaxPending > 0) {
          const targetQueue = [...targetPosState.queue];
          if (targetQueue.length >= safeMaxPending) {
            const nonPersistentIdx = targetQueue.findIndex((t) => t.duration > 0);
            if (nonPersistentIdx !== -1) {
              targetQueue.splice(nonPersistentIdx, 1);
            } else {
              return state;
            }
          }
          targetQueue.push({ ...updatedItem, status: "queued" });
          nextState[newPos] = { ...targetPosState, queue: targetQueue };
        }

        return nextState;
      }

      // In-place property update within the same positional stack
      const updatedItem: ToastItemState = {
        ...currentItem,
        ...updates,
        position: currentItem.position,
        color: updates.color ?? currentItem.color,
        radius: updates.radius ?? currentItem.radius,
        variant: updates.variant ?? currentItem.variant,
        duration,
        dismissible: updates.dismissible !== undefined ? updates.dismissible : currentItem.dismissible,
        status: currentItem.status,
        revision: (currentItem.revision ?? 0) + 1,
      };

      const posState = state[pos];
      if (isVisible) {
        const nextVisible = [...posState.visible];
        nextVisible[index] = updatedItem;
        return { ...state, [pos]: { ...posState, visible: nextVisible } };
      } else {
        const nextQueue = [...posState.queue];
        nextQueue[index] = updatedItem;
        return { ...state, [pos]: { ...posState, queue: nextQueue } };
      }
    }

    case "DISMISS_ALL": {
      const { position } = action;
      let stateChanged = false;
      const nextState = { ...state };
      const targetPositions = position ? [position] : ALL_POSITIONS;

      for (const pos of targetPositions) {
        const posState = state[pos];
        if (posState.visible.length > 0 || posState.queue.length > 0) {
          const nextVisible = posState.visible.map((t) => ({ ...t, status: "exiting" as const }));
          nextState[pos] = {
            visible: nextVisible,
            queue: [], // Instantly drop pending items
          };
          stateChanged = true;
        }
      }

      return stateChanged ? nextState : state;
    }

    case "CLEAR_POSITION": {
      return { ...state, [action.position]: { visible: [], queue: [] } };
    }

    case "CLEAR_ALL_IMMEDIATELY": {
      return createInitialToastState();
    }

    default:
      return state;
  }
}
