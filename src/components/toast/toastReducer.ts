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
  | { type: "UPDATE_TOAST"; id: string; updates: Partial<ToastOptions>; maxVisible?: number; maxPending?: number }
  | { type: "DISMISS_ALL"; position?: ToastPosition }
  | { type: "CLEAR_POSITION"; position: ToastPosition }
  | { type: "CLEAR_ALL_IMMEDIATELY" };

const DEFAULT_MAX_VISIBLE = 3;
const DEFAULT_MAX_PENDING = 20;

/**
 * Pure, deterministic reducer managing 6 independent FIFO positional toast stacks.
 */
export function toastReducer(state: ToastState, action: ToastActionType): ToastState {
  switch (action.type) {
    case "ADD_TOAST": {
      const { toast, maxVisible = DEFAULT_MAX_VISIBLE, maxPending = DEFAULT_MAX_PENDING } = action;
      const pos = toast.position;
      const currentPosState = state[pos];

      // Prevent duplicate ID if already exists
      const existsInVisible = currentPosState.visible.some((t) => t.id === toast.id);
      const existsInQueue = currentPosState.queue.some((t) => t.id === toast.id);
      if (existsInVisible || existsInQueue) {
        return state;
      }

      // Check if slot available in visible stack
      if (currentPosState.visible.length < maxVisible) {
        const newVisible: ToastItemState[] = [...currentPosState.visible, { ...toast, status: "visible" }];
        return { ...state, [pos]: { ...currentPosState, visible: newVisible } };
      }

      // Stack full -> Enqueue into FIFO pending queue
      let updatedQueue = [...currentPosState.queue];
      if (updatedQueue.length >= maxPending) {
        // Bounded pending queue policy: Drop the oldest non-persistent item; if none, drop oldest
        const nonPersistentIdx = updatedQueue.findIndex((t) => t.duration > 0);
        if (nonPersistentIdx !== -1) updatedQueue.splice(nonPersistentIdx, 1);
        else updatedQueue.shift();
      }

      updatedQueue.push({ ...toast, status: "queued" });

      return { ...state, [pos]: { ...currentPosState, queue: updatedQueue } };
    }

    case "START_EXIT": {
      const { id } = action;
      let stateChanged = false;
      const nextState = { ...state };

      for (const pos of ALL_POSITIONS) {
        const posState = state[pos];
        const visibleIdx = posState.visible.findIndex((t) => t.id === id);

        if (visibleIdx !== -1) {
          const currentItem = posState.visible[visibleIdx];
          if (currentItem.status !== "exiting") {
            const nextVisible = [...posState.visible];
            nextVisible[visibleIdx] = { ...currentItem, status: "exiting" };
            nextState[pos] = { ...posState, visible: nextVisible };
            stateChanged = true;
          }
          break;
        }

        // If in queue, directly remove since it never became visible
        const queueIdx = posState.queue.findIndex((t) => t.id === id);
        if (queueIdx !== -1) {
          const nextQueue = posState.queue.filter((t) => t.id !== id);
          nextState[pos] = { ...posState, queue: nextQueue };
          stateChanged = true;
          break;
        }
      }

      return stateChanged ? nextState : state;
    }

    case "REMOVE_TOAST": {
      const { id, maxVisible = DEFAULT_MAX_VISIBLE } = action;
      let stateChanged = false;
      const nextState = { ...state };

      for (const pos of ALL_POSITIONS) {
        const posState = state[pos];
        const visibleIdx = posState.visible.findIndex((t) => t.id === id);

        if (visibleIdx !== -1) {
          const nextVisible = posState.visible.filter((t) => t.id !== id);
          let nextQueue = [...posState.queue];

          // Promote oldest pending item from FIFO queue if visible count below threshold
          if (nextVisible.length < maxVisible && nextQueue.length > 0) {
            const [promotedItem, ...remainingQueue] = nextQueue;
            nextVisible.push({ ...promotedItem, status: "visible" });
            nextQueue = remainingQueue;
          }

          nextState[pos] = { visible: nextVisible, queue: nextQueue };
          stateChanged = true;
          break;
        }

        const queueIdx = posState.queue.findIndex((t) => t.id === id);
        if (queueIdx !== -1) {
          nextState[pos] = { ...posState, queue: posState.queue.filter((t) => t.id !== id) };
          stateChanged = true;
          break;
        }
      }

      return stateChanged ? nextState : state;
    }

    case "UPDATE_TOAST": {
      const { id, updates, maxVisible = DEFAULT_MAX_VISIBLE, maxPending = DEFAULT_MAX_PENDING } = action;
      let stateChanged = false;
      const nextState = { ...state };

      for (const pos of ALL_POSITIONS) {
        const posState = state[pos];
        const visibleIdx = posState.visible.findIndex((t) => t.id === id);
        const queueIdx = posState.queue.findIndex((t) => t.id === id);

        if (visibleIdx !== -1 || queueIdx !== -1) {
          const isVisible = visibleIdx !== -1;
          const currentItem = isVisible ? posState.visible[visibleIdx] : posState.queue[queueIdx];
          const newPos = updates.position ? normalizePosition(updates.position) : currentItem.position;

          // If position changed, migrate across positional stacks
          if (newPos !== pos) {
            // Remove from current position and promote queue
            const updatedOldVisible = isVisible ? posState.visible.filter((t) => t.id !== id) : posState.visible;
            let updatedOldQueue = isVisible ? [...posState.queue] : posState.queue.filter((t) => t.id !== id);

            if (isVisible && updatedOldVisible.length < maxVisible && updatedOldQueue.length > 0) {
              const [promoted, ...rest] = updatedOldQueue;
              updatedOldVisible.push({ ...promoted, status: "visible" });
              updatedOldQueue = rest;
            }

            nextState[pos] = { visible: updatedOldVisible, queue: updatedOldQueue };

            // Add with updates to new position
            const updatedItem: ToastItemState = {
              ...currentItem,
              ...updates,
              position: newPos,
              color: updates.color ?? currentItem.color,
              radius: updates.radius ?? currentItem.radius,
              variant: updates.variant ?? currentItem.variant,
              duration: updates.duration !== undefined ? updates.duration : currentItem.duration,
              dismissible: updates.dismissible !== undefined ? updates.dismissible : currentItem.dismissible,
              status: "queued", // temporary, re-evaluated in target position
            };

            const targetPosState = nextState[newPos];
            if (targetPosState.visible.length < maxVisible) {
              nextState[newPos] = { ...targetPosState, visible: [...targetPosState.visible, { ...updatedItem, status: "visible" }] };
            } else {
              let targetQueue = [...targetPosState.queue];
              if (targetQueue.length >= maxPending) targetQueue.shift();
              targetQueue.push({ ...updatedItem, status: "queued" });
              nextState[newPos] = { ...targetPosState, queue: targetQueue };
            }

            return nextState;
          }

          // In-place property update within same positional stack
          const updatedItem: ToastItemState = {
            ...currentItem,
            ...updates,
            position: currentItem.position,
            color: updates.color ?? currentItem.color,
            radius: updates.radius ?? currentItem.radius,
            variant: updates.variant ?? currentItem.variant,
            duration: updates.duration !== undefined ? updates.duration : currentItem.duration,
            dismissible: updates.dismissible !== undefined ? updates.dismissible : currentItem.dismissible,
          };

          if (isVisible) {
            const nextVisible = [...posState.visible];
            nextVisible[visibleIdx] = updatedItem;
            nextState[pos] = { ...posState, visible: nextVisible };
          } else {
            const nextQueue = [...posState.queue];
            nextQueue[queueIdx] = updatedItem;
            nextState[pos] = { ...posState, queue: nextQueue };
          }

          stateChanged = true;
          break;
        }
      }

      return stateChanged ? nextState : state;
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
      return {
        ...state,
        [action.position]: { visible: [], queue: [] },
      };
    }

    case "CLEAR_ALL_IMMEDIATELY": {
      return createInitialToastState();
    }

    default:
      return state;
  }
}
