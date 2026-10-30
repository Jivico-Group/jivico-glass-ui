import React from "react";
import { renderToString } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { useToast } from "../ToastContext.js";
import { ToastProvider } from "../ToastProvider.js";
import type { ToastApi } from "../Toast.types.js";

function ConsumerComponent({ onReady }: { onReady?: (api: ToastApi) => void }) {
  const toast = useToast();
  if (onReady) onReady(toast);
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
      </ToastProvider>,
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
      </ToastProvider>,
    );

    const id1 = capturedApi!.success("Saved successfully");
    const id2 = capturedApi!.error("Failed to upload");

    expect(typeof id1).toBe("string");
    expect(typeof id2).toBe("string");
    expect(id1).not.toBe(id2);
  });

  it("renders server-side children cleanly with portal enabled", () => {
    const html = renderToString(
      <ToastProvider portal={true}>
        <ConsumerComponent />
      </ToastProvider>,
    );

    expect(html).toContain("Consumer Active");
  });

  it("accepts an optional custom portal container without error", () => {
    const mockContainer = {} as HTMLElement;

    const html = renderToString(
      <ToastProvider portal={true} container={mockContainer}>
        <ConsumerComponent />
      </ToastProvider>,
    );

    expect(html).toContain("Consumer Active");
  });

  describe("Phase 7: Re-Rendering, Context Stability & Performance", () => {
    it("preserves exact referential identity of all ToastApi methods across multiple consumer invocations", () => {
      let apiRef1: ToastApi | null = null;
      let apiRef2: ToastApi | null = null;

      function TwoConsumers() {
        const toast1 = useToast();
        const toast2 = useToast();
        apiRef1 = toast1;
        apiRef2 = toast2;
        return <div>Dual Consumer</div>;
      }

      renderToString(
        <ToastProvider portal={false}>
          <TwoConsumers />
        </ToastProvider>,
      );

      expect(apiRef1).toBe(apiRef2);
      expect(apiRef1!.show).toBe(apiRef2!.show);
      expect(apiRef1!.success).toBe(apiRef2!.success);
      expect(apiRef1!.error).toBe(apiRef2!.error);
      expect(apiRef1!.warning).toBe(apiRef2!.warning);
      expect(apiRef1!.info).toBe(apiRef2!.info);
      expect(apiRef1!.primary).toBe(apiRef2!.primary);
      expect(apiRef1!.secondary).toBe(apiRef2!.secondary);
      expect(apiRef1!.accent).toBe(apiRef2!.accent);
      expect(apiRef1!.glass).toBe(apiRef2!.glass);
      expect(apiRef1!.update).toBe(apiRef2!.update);
      expect(apiRef1!.dismiss).toBe(apiRef2!.dismiss);
      expect(apiRef1!.dismissAll).toBe(apiRef2!.dismissAll);
    });

    it("does not expose internal toast array to public ToastContext, ensuring consumer render isolation", () => {
      let capturedApi: any = null;

      renderToString(
        <ToastProvider portal={false}>
          <ConsumerComponent onReady={(api) => (capturedApi = api)} />
        </ToastProvider>,
      );

      // Verify that no internal state or toast arrays leak onto the public ToastApi
      expect(capturedApi.state).toBeUndefined();
      expect(capturedApi.toasts).toBeUndefined();
      expect(capturedApi.queue).toBeUndefined();
      expect(capturedApi.visible).toBeUndefined();
    });

    it("preserves original children directly without injecting wrapper divs or layout disruptions", () => {
      const html = renderToString(
        <ToastProvider portal={false}>
          <main id="app-root" className="grid-container">
            <section id="content-hero">Hero</section>
          </main>
        </ToastProvider>,
      );

      // The child structure must be completely preserved as direct descendants
      expect(html).toContain('<main id="app-root" class="grid-container"><section id="content-hero">Hero</section></main>');
    });
  });
});
