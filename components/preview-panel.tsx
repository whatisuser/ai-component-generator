"use client";

import {
  Component,
  type ErrorInfo,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { LiveContext, LivePreview, LiveProvider } from "react-live";

import { ErrorState } from "@/components/status-state";
import { previewScope } from "@/lib/preview-scope";

type PreviewPanelProps = {
  code: string;
  rawCode: string;
  componentName: string;
  isLoading: boolean;
  error: string | null;
};

type ViewportMode = "desktop" | "mobile";

type PreviewRuntimeBoundaryProps = {
  children: ReactNode;
  resetKey: string;
};

type PreviewRuntimeBoundaryState = {
  error: Error | null;
};

class PreviewRuntimeBoundary extends Component<
  PreviewRuntimeBoundaryProps,
  PreviewRuntimeBoundaryState
> {
  state: PreviewRuntimeBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: Error): PreviewRuntimeBoundaryState {
    return { error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Preview runtime error", error, errorInfo);
  }

  override componentDidUpdate(prevProps: PreviewRuntimeBoundaryProps) {
    if (
      this.state.error &&
      prevProps.resetKey !== this.props.resetKey
    ) {
      this.setState({ error: null });
    }
  }

  override render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-full items-center justify-center bg-slate-50 p-5">
          <div className="w-full max-w-lg rounded-3xl border border-rose-200 bg-white p-5 text-left shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
              Preview crashed
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              The generated component threw a runtime error.
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Layout is still isolated in this viewport, but the rendered code
              is not trusted and can fail at runtime.
            </p>
        <pre
          className="mt-4 overflow-auto rounded-2xl bg-rose-50 px-4 py-3 font-mono text-sm text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          tabIndex={0}
        >
              {this.state.error.message}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function PreviewPlaceholder({
  title,
  description,
  isLoading,
}: {
  title: string;
  description: string;
  isLoading?: boolean;
}) {
  return (
    <div className="flex min-h-full items-center justify-center bg-slate-50 p-5">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
        {isLoading ? (
          <div aria-hidden="true" className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-500" />
        ) : (
          <div aria-hidden="true" className="mx-auto h-10 w-10 rounded-full border border-slate-200 bg-slate-100" />
        )}
        <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
}

function PreviewErrorCard({
  title,
  description,
  details,
}: {
  title: string;
  description: string;
  details: string;
}) {
  return (
    <div className="flex min-h-full items-center justify-center bg-slate-50 p-5">
      <div className="w-full max-w-lg rounded-3xl border border-rose-200 bg-white p-5 text-left shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
          Preview error
        </p>
        <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        <pre
          className="mt-4 overflow-auto rounded-2xl bg-rose-50 px-4 py-3 font-mono text-sm text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          tabIndex={0}
        >
          {details}
        </pre>
      </div>
    </div>
  );
}

function PreviewFrameContent({
  isLoading,
  hasCode,
  resetKey,
  isSlow,
}: {
  isLoading: boolean;
  hasCode: boolean;
  resetKey: string;
  isSlow: boolean;
}) {
  const { error: previewError } = useContext(LiveContext);

  if (isLoading) {
    return (
      <PreviewPlaceholder
        isLoading
        title={isSlow ? "Preview is taking longer than expected" : "Preparing preview"}
        description={
          isSlow
            ? "The generated component is still being prepared inside the isolated viewport. Reload the preview if it appears stuck."
            : "The generated component is being evaluated inside an isolated viewport."
        }
      />
    );
  }

  if (!hasCode) {
    return (
      <PreviewPlaceholder
        title="Preview unavailable"
        description="Generate a component to render it inside the isolated preview viewport."
      />
    );
  }

  if (previewError) {
    return (
      <PreviewErrorCard
        title="The generated component could not be compiled."
        description="The preview remains layout-isolated in this viewport, but the generated code is still not trusted and may fail before render."
        details={previewError}
      />
    );
  }

  return (
    <PreviewRuntimeBoundary resetKey={resetKey}>
      <div className="@container w-full max-w-full overflow-hidden">
        <LivePreview />
      </div>
    </PreviewRuntimeBoundary>
  );
}

function PreviewViewport({
  isLoading,
  hasCode,
  viewportMode,
  resetKey,
  isSlow,
}: {
  isLoading: boolean;
  hasCode: boolean;
  viewportMode: ViewportMode;
  resetKey: string;
  isSlow: boolean;
}) {
  return (
    <div className="w-full overflow-hidden rounded-[1.4rem] border border-dashed border-slate-200 bg-slate-100 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
      <div className="flex w-full justify-center overflow-auto">
        <div
          className={`transition-[width] duration-200 ${
            viewportMode === "mobile"
              ? "w-[390px] max-w-full"
              : "w-full"
          }`}
          style={
            viewportMode === "mobile"
              ? { maxWidth: "390px" }
              : undefined
          }
        >
          <div className="min-h-[28rem] overflow-auto rounded-[1.1rem] border border-slate-200 shadow-sm">
          <PreviewFrameContent
            isLoading={isLoading}
            hasCode={hasCode}
            resetKey={resetKey}
            isSlow={isSlow}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PreviewPanel({
  code,
  rawCode,
  componentName,
  isLoading,
  error,
}: PreviewPanelProps) {
  const [viewportMode, setViewportMode] = useState<ViewportMode>("desktop");
  const [reloadKey, setReloadKey] = useState(0);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsSlow(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setIsSlow(true);
    }, 2500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isLoading, reloadKey, code]);

  async function handleCopyCode() {
    if (!rawCode) {
      return;
    }

    try {
      await navigator.clipboard.writeText(rawCode);
      setCopyState("copied");
      window.setTimeout(() => {
        setCopyState("idle");
      }, 1600);
    } catch {
      setCopyState("failed");
      window.setTimeout(() => {
        setCopyState("idle");
      }, 2000);
    }
  }

  const hasCode = Boolean(code);
  const previewResetKey = `${componentName}-${viewportMode}-${reloadKey}-${code.length}`;

  if (error) {
    return <ErrorState title="Generation failed" description={error} />;
  }

  return (
    <section className="flex min-h-[32rem] flex-col rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel-strong)] p-5 shadow-[var(--shadow)] backdrop-blur sm:p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Live preview
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            {componentName}
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Preview rendering is isolated for layout containment, but generated
            code is still not trusted.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
            Reloads {reloadKey}
          </span>
          <button
            type="button"
            onClick={() => setReloadKey((current) => current + 1)}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1"
          >
            Reload preview
          </button>
          <button
            type="button"
            onClick={handleCopyCode}
            disabled={!rawCode}
            aria-live="polite"
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1"
          >
            {copyState === "copied"
              ? "Copied"
              : copyState === "failed"
                ? "Copy failed"
                : "Copy generated code"}
          </button>
          <div
            className="flex items-center rounded-full border border-slate-200 bg-white p-1"
            role="group"
            aria-label="Preview viewport size"
          >
            <button
              type="button"
              onClick={() => setViewportMode("desktop")}
              aria-pressed={viewportMode === "desktop"}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1 ${
                viewportMode === "desktop"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Desktop
            </button>
            <button
              type="button"
              onClick={() => setViewportMode("mobile")}
              aria-pressed={viewportMode === "mobile"}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1 ${
                viewportMode === "mobile"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Mobile
            </button>
          </div>
        </div>
      </div>
      <LiveProvider code={code} scope={previewScope} noInline>
        <div className="w-full max-w-full overflow-hidden">
          <div className="flex min-h-[24rem] flex-1 flex-col gap-4">
            <div className="flex items-center justify-between gap-3 px-1 text-xs uppercase tracking-[0.18em] text-slate-500">
              <span>
                {viewportMode === "mobile" ? "Mobile viewport" : "Desktop viewport"}
              </span>
              <span>{isSlow ? "Preparation delayed" : "Isolated 30rem-tall frame"}</span>
            </div>
            <PreviewViewport
              isLoading={isLoading}
              hasCode={hasCode}
              viewportMode={viewportMode}
              resetKey={previewResetKey}
              isSlow={isSlow}
            />
          </div>
        </div>
      </LiveProvider>
    </section>
  );
}
