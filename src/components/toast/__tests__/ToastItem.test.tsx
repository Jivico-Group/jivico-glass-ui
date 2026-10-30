import React from "react";
import { describe, it, expect, vi } from "vitest";
import { renderToString } from "react-dom/server";
import { ToastItem } from "../ToastItem.js";
import type { ToastItemState } from "../Toast.types.js";

const createMockToast = (
  id: string,
  overrides: Partial<ToastItemState> = {}
): ToastItemState => ({
  id,
  message: `Toast message ${id}`,
  title: `Title ${id}`,
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

describe("ToastItem Visual Component", () => {
  it("renders basic toast with title, message, and timestamp", () => {
    const item = createMockToast("test-1", {
      title: "Saved successfully",
      message: "Your product details were updated.",
      timestamp: "2m ago",
      color: "success",
    });

    const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);

    expect(html).toContain("Saved successfully");
    expect(html).toContain("Your product details were updated.");
    expect(html).toContain("2m ago");
    expect(html).toContain('role="status"');
    expect(html).toContain('aria-live="polite"');
    expect(html).toContain('data-toast-id="test-1"');
  });

  it("renders error toast with role=alert and assertive aria-live", () => {
    const item = createMockToast("err-1", {
      title: "Upload failed",
      message: "Image could not be processed. Try again.",
      color: "error",
      timestamp: "8m ago",
    });

    const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);

    expect(html).toContain("Upload failed");
    expect(html).toContain("Image could not be processed. Try again.");
    expect(html).toContain('role="alert"');
    expect(html).toContain('aria-live="assertive"');
  });

  it("renders warning toast with role=alert and polite aria-live", () => {
    const item = createMockToast("warn-1", {
      title: "Draft not published",
      message: "Complete required fields before publishing.",
      color: "warning",
      timestamp: "6m ago",
    });

    const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);

    expect(html).toContain("Draft not published");
    expect(html).toContain('role="alert"');
    expect(html).toContain('aria-live="polite"');
  });

  it("renders action button when action prop is provided", () => {
    const onClick = vi.fn();
    const item = createMockToast("action-1", {
      title: "Item archived",
      message: "Product was moved to archive.",
      action: {
        label: "Undo",
        onClick,
      },
    });

    const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);

    expect(html).toContain("Undo");
    expect(html).toContain("Item archived");
  });

  it("omits dismiss button when dismissible is false", () => {
    const item = createMockToast("no-dismiss", {
      title: "Mandatory update",
      message: "System maintenance in progress.",
      dismissible: false,
    });

    const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);

    expect(html).not.toContain('aria-label="Dismiss notification"');
  });

  it("includes dismiss button when dismissible is true", () => {
    const item = createMockToast("can-dismiss", {
      title: "Notice",
      message: "Regular notice.",
      dismissible: true,
    });

    const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);

    expect(html).toContain('aria-label="Dismiss notification"');
  });

  it("renders loading state with spinning loader", () => {
    const item = createMockToast("loading-1", {
      title: "Syncing changes",
      message: "Updating storefront pricing...",
      loading: true,
      color: "info",
    });

    const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);

    expect(html).toContain("Syncing changes");
    expect(html).toContain("Updating storefront pricing...");
    expect(html).toContain("animation:");
  });

  it("renders custom icon override when provided", () => {
    const item = createMockToast("custom-icon", {
      title: "Custom Badge",
      message: "Testing custom icon injection.",
      icon: <span data-testid="custom-gem">💎</span>,
    });

    const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);

    expect(html).toContain("💎");
    expect(html).toContain('data-testid="custom-gem"');
  });

  it("supports all 4 visual variants (glass, solid, soft, outlined)", () => {
    const variants = ["glass", "solid", "soft", "outlined"] as const;

    for (const variant of variants) {
      const item = createMockToast(`var-${variant}`, { variant });
      const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);
      expect(html).toContain(`data-toast-id="var-${variant}"`);
    }
  });

  it("supports all 3 radius presets (rounded, soft, square)", () => {
    const radii = ["rounded", "soft", "square"] as const;

    for (const radius of radii) {
      const item = createMockToast(`rad-${radius}`, { radius });
      const html = renderToString(<ToastItem item={item} onDismiss={vi.fn()} />);
      expect(html).toContain(`data-toast-id="rad-${radius}"`);
    }
  });
});
