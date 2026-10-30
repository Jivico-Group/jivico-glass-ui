import React from "react";
import { describe, it, expect, vi } from "vitest";
import { renderToString } from "react-dom/server";
import { ToastViewport, ToastAllViewports } from "../ToastViewport.js";
import { createInitialToastState } from "../toastReducer.js";
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

describe("ToastViewport Component", () => {
  it("renders null when items array is empty", () => {
    const html = renderToString(
      <ToastViewport
        position="top-right"
        items={[]}
        onDismiss={vi.fn()}
        portal={false}
      />
    );

    expect(html).toBe("");
  });

  it("renders viewport with items when portal is false", () => {
    const items = [
      createMockToast("toast-1", { title: "First Toast" }),
      createMockToast("toast-2", { title: "Second Toast" }),
    ];

    const html = renderToString(
      <ToastViewport
        position="top-right"
        items={items}
        onDismiss={vi.fn()}
        portal={false}
      />
    );

    expect(html).toContain('data-toast-position="top-right"');
    expect(html).toContain("First Toast");
    expect(html).toContain("Second Toast");
    expect(html).toContain('role="region"');
    expect(html).toContain('aria-label="Notifications top-right"');
  });

  it("applies column layout for top positions and column-reverse for bottom positions", () => {
    const topItems = [createMockToast("top-1")];
    const bottomItems = [createMockToast("bottom-1", { position: "bottom-center" })];

    const topHtml = renderToString(
      <ToastViewport
        position="top-right"
        items={topItems}
        onDismiss={vi.fn()}
        portal={false}
      />
    );

    const bottomHtml = renderToString(
      <ToastViewport
        position="bottom-center"
        items={bottomItems}
        onDismiss={vi.fn()}
        portal={false}
      />
    );

    expect(topHtml).toContain("flex-direction:column");
    expect(bottomHtml).toContain("flex-direction:column-reverse");
  });

  it("renders SSR-safe null when portal is enabled in server render mode", () => {
    const items = [createMockToast("ssr-1")];

    // During renderToString (SSR), mounted is false and document is undefined/unmounted
    const html = renderToString(
      <ToastViewport
        position="top-right"
        items={items}
        onDismiss={vi.fn()}
        portal={true}
      />
    );

    expect(html).toBe("");
  });

  describe("ToastAllViewports", () => {
    it("renders only viewports that have active visible items", () => {
      const state = createInitialToastState();
      state["top-right"].visible = [
        createMockToast("tr-1", { position: "top-right", title: "TR Active" }),
      ];
      state["bottom-left"].visible = [
        createMockToast("bl-1", { position: "bottom-left", title: "BL Active" }),
      ];

      const html = renderToString(
        <ToastAllViewports
          state={state}
          onDismiss={vi.fn()}
          portal={false}
        />
      );

      expect(html).toContain('data-toast-position="top-right"');
      expect(html).toContain("TR Active");
      expect(html).toContain('data-toast-position="bottom-left"');
      expect(html).toContain("BL Active");

      // Empty positions should not be rendered
      expect(html).not.toContain('data-toast-position="top-left"');
      expect(html).not.toContain('data-toast-position="top-center"');
      expect(html).not.toContain('data-toast-position="bottom-center"');
      expect(html).not.toContain('data-toast-position="bottom-right"');
    });
  });
});
