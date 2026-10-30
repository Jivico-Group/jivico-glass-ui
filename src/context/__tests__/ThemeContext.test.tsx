import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderToString } from "react-dom/server";
import { GlassModeProvider, useGlassMode } from "../ThemeContext.js";
import type { GlassModeContextType } from "../ThemeContext.js";

function ThemeConsumer({ onContext }: { onContext?: (ctx: GlassModeContextType) => void }) {
  const context = useGlassMode();
  if (onContext) {
    onContext(context);
  }
  return (
    <div data-testid="theme-consumer">
      <span data-mode={context.mode} />
      <span data-resolved={context.resolvedMode} />
    </div>
  );
}

describe("GlassModeProvider and useGlassMode", () => {
  const originalLocalStorage = globalThis.localStorage;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    globalThis.localStorage = originalLocalStorage;
  });

  it("renders deterministically during SSR with defaultMode", () => {
    let capturedCtx: GlassModeContextType | null = null;
    const html = renderToString(
      <GlassModeProvider defaultMode="system">
        <ThemeConsumer onContext={(ctx) => (capturedCtx = ctx)} />
      </GlassModeProvider>
    );

    expect(html).toContain('data-mode="system"');
    expect(html).toContain('data-resolved="light"');
    expect(capturedCtx).toBeDefined();
    expect(capturedCtx!.mode).toBe("system");
    expect(capturedCtx!.resolvedMode).toBe("light");
    expect(typeof capturedCtx!.toggleGlassMode).toBe("function");
    expect(typeof capturedCtx!.setGlassMode).toBe("function");
  });

  it("handles first visit with no saved preference", () => {
    const mockStorage = {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
    };
    globalThis.localStorage = mockStorage as any;

    let capturedCtx: GlassModeContextType | null = null;
    renderToString(
      <GlassModeProvider defaultMode="dark" storageKey="custom-key">
        <ThemeConsumer onContext={(ctx) => (capturedCtx = ctx)} />
      </GlassModeProvider>
    );

    expect(capturedCtx!.mode).toBe("dark");
    expect(capturedCtx!.resolvedMode).toBe("dark");
    expect(mockStorage.setItem).not.toHaveBeenCalled();
  });

  it("handles storage access denied gracefully without throwing", () => {
    const mockStorage = {
      getItem: vi.fn().mockImplementation(() => {
        throw new Error("QuotaExceeded or SecurityError: Access Denied");
      }),
      setItem: vi.fn().mockImplementation(() => {
        throw new Error("QuotaExceeded or SecurityError: Access Denied");
      }),
    };
    globalThis.localStorage = mockStorage as any;

    let capturedCtx: GlassModeContextType | null = null;
    expect(() => {
      renderToString(
        <GlassModeProvider defaultMode="light">
          <ThemeConsumer onContext={(ctx) => (capturedCtx = ctx)} />
        </GlassModeProvider>
      );
    }).not.toThrow();

    expect(() => {
      capturedCtx!.setGlassMode("dark");
      capturedCtx!.toggleGlassMode();
    }).not.toThrow();
  });

  it("ignores invalid stored values", () => {
    const mockStorage = {
      getItem: vi.fn().mockReturnValue("invalid-mode-string"),
      setItem: vi.fn(),
    };
    globalThis.localStorage = mockStorage as any;

    let capturedCtx: GlassModeContextType | null = null;
    renderToString(
      <GlassModeProvider defaultMode="light">
        <ThemeConsumer onContext={(ctx) => (capturedCtx = ctx)} />
      </GlassModeProvider>
    );

    expect(capturedCtx!.mode).toBe("light");
  });

  it("persists valid user mode selections to localStorage without updater side-effects", () => {
    const mockStorage = {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
    };
    globalThis.localStorage = mockStorage as any;

    let capturedCtx: GlassModeContextType | null = null;
    renderToString(
      <GlassModeProvider defaultMode="light" storageKey="app-theme-pref">
        <ThemeConsumer onContext={(ctx) => (capturedCtx = ctx)} />
      </GlassModeProvider>
    );

    capturedCtx!.setGlassMode("dark");
    expect(mockStorage.setItem).toHaveBeenCalledWith("app-theme-pref", "dark");

    capturedCtx!.toggleGlassMode();
    expect(mockStorage.setItem).toHaveBeenCalledWith("app-theme-pref", "light");
  });

  it("gracefully falls back when startViewTransition is unsupported or throws", () => {
    const mockStorage = {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
    };
    globalThis.localStorage = mockStorage as any;

    // Simulate startViewTransition throwing
    (globalThis as any).document = {
      startViewTransition: vi.fn().mockImplementation(() => {
        throw new Error("InvalidStateError: Transition aborted");
      }),
    };

    let capturedCtx: GlassModeContextType | null = null;
    renderToString(
      <GlassModeProvider defaultMode="light">
        <ThemeConsumer onContext={(ctx) => (capturedCtx = ctx)} />
      </GlassModeProvider>
    );

    expect(() => {
      capturedCtx!.setGlassMode("dark");
      capturedCtx!.toggleGlassMode();
    }).not.toThrow();
  });

  it("supports rapid consecutive toggle operations without state loss", () => {
    const mockStorage = {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
    };
    globalThis.localStorage = mockStorage as any;

    let capturedCtx: GlassModeContextType | null = null;
    renderToString(
      <GlassModeProvider defaultMode="light" storageKey="rapid-toggle-key">
        <ThemeConsumer onContext={(ctx) => (capturedCtx = ctx)} />
      </GlassModeProvider>
    );

    capturedCtx!.toggleGlassMode(); // -> dark
    capturedCtx!.toggleGlassMode(); // -> light
    capturedCtx!.toggleGlassMode(); // -> dark
    capturedCtx!.toggleGlassMode(); // -> light
    capturedCtx!.toggleGlassMode(); // -> dark

    expect(mockStorage.setItem).toHaveBeenLastCalledWith("rapid-toggle-key", "dark");
  });

  it("safely handles ViewTransition object with rejecting finished/ready promises", () => {
    const originalWindow = (globalThis as any).window;
    (globalThis as any).window = globalThis;

    const mockStorage = {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
    };
    globalThis.localStorage = mockStorage as any;

    let callbackExecuted = false;
    const rejectingPromise = Promise.reject(new Error("AbortError: Transition superseded"));
    // Attach catch so node unhandled rejection doesn't trigger
    rejectingPromise.catch(() => {});

    (globalThis as any).document = {
      startViewTransition: vi.fn().mockImplementation((cb: () => void) => {
        callbackExecuted = true;
        cb();
        return {
          finished: rejectingPromise,
          ready: rejectingPromise,
          updateCallbackDone: Promise.resolve(),
        };
      }),
    };

    let capturedCtx: GlassModeContextType | null = null;
    renderToString(
      <GlassModeProvider defaultMode="light">
        <ThemeConsumer onContext={(ctx) => (capturedCtx = ctx)} />
      </GlassModeProvider>
    );

    expect(() => {
      capturedCtx!.setGlassMode("dark");
    }).not.toThrow();

    expect(callbackExecuted).toBe(true);

    (globalThis as any).window = originalWindow;
  });
});
