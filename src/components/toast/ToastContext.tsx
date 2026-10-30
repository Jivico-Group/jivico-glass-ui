"use client";

import React, { createContext, useContext } from "react";
import type { ToastApi } from "./Toast.types.js";

/**
 * ToastContext — Global React Context providing access to the stable ToastApi.
 */
export const ToastContext = createContext<ToastApi | null>(null);

/**
 * useToast — Custom hook to access the global toast notification system.
 * Throws a descriptive error if accessed outside of a <ToastProvider>.
 */
export function useToast(): ToastApi {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }
  return context;
}
