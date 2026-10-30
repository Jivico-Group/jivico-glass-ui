import React from "react";
import { describe, it, expect, vi } from "vitest";
import { renderToString } from "react-dom/server";
import { ToastProvider } from "../ToastProvider.js";
import { useToast } from "../ToastContext.js";
import type { ToastApi } from "../Toast.types.js";

function ConsumerComponent({
  onReady,
}: {
  onReady?: (api: ToastApi) => void;
}) {
  const toast = useToast();
  if (onReady) {
    onReady(toast);
  }
  return <div data-testid="consumer">Consumer Active</div>;
}

describe("ToastProvider and useToast", () => {
  it("throws a descriptive error when useToast is used outside of ToastProvider", () => {
    expect(() => {
      renderToString(<ConsumerComponent />);
    }).toThrow("useToast must be used within a ToastProvider.");
  });

  it("renders children and provides all ToastApi methods via useToast", () => {
    let capturedApi: ToastApi | null = null;

    const html = renderToString(
      <ToastProvider portal={false}>
        <ConsumerComponent onReady={(api) => (capturedApi = api)} />
      </ToastProvider>
    );

    expect(html).toContain("Consumer Active");
    expect(capturedApi).toBeDefined();
    expect(typeof capturedApi!.show).toBe("function");
    expect(typeof capturedApi!.success).toBe("function");
    expect(typeof capturedApi!.error).toBe("function");
    expect(typeof capturedApi!.warning).toBe("function");
    expect(typeof capturedApi!.info).toBe("function");
    expect(typeof capturedApi!.primary).toBe("function");
    expect(typeof capturedApi!.secondary).toBe("function");
    expect(typeof capturedApi!.accent).toBe("function");
    expect(typeof capturedApi!.glass).toBe("function");
    expect(typeof capturedApi!.update).toBe("function");
    expect(typeof capturedApi!.dismiss).toBe("function");
    expect(typeof capturedApi!.dismissAll).toBe("function");
  });

  it("allows triggering toasts and returns unique IDs", () => {
    let capturedApi: ToastApi | null = null;

    renderToString(
      <ToastProvider portal={false}>
        <ConsumerComponent onReady={(api) => (capturedApi = api)} />
      </ToastProvider>
    );

    const id1 = capturedApi!.success("Saved successfully");
    const id2 = capturedApi!.error("Failed to upload");

    expect(typeof id1).toBe("string");
    expect(typeof id2).toBe("string");
    expect(id1).not.toBe(id2);
  });
});
