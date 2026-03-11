"use client";

import { LiveError, LivePreview, LiveProvider } from "react-live";

import { EmptyState, ErrorState, LoadingState } from "@/components/status-state";
import { previewScope } from "@/lib/preview-scope";

type PreviewPanelProps = {
  code: string;
  componentName: string;
  isLoading: boolean;
  error: string | null;
};

export function PreviewPanel({
  code,
  componentName,
  isLoading,
  error,
}: PreviewPanelProps) {
  if (isLoading) {
    return (
      <LoadingState
        title="Rendering preview"
        description="The generated component will be evaluated in the browser."
      />
    );
  }

  if (error) {
    return <ErrorState title="Generation failed" description={error} />;
  }

  if (!code) {
    return (
      <EmptyState
        title="Preview unavailable"
        description="Generate a component to render a live preview."
      />
    );
  }

  return (
    <section className="flex min-h-[32rem] flex-col rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel-strong)] p-5 shadow-[var(--shadow)] backdrop-blur sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Live preview
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            {componentName}
          </h2>
        </div>
      </div>
      <LiveProvider code={code} scope={previewScope} noInline>
        <div className="flex min-h-[24rem] flex-1 items-start justify-center overflow-auto rounded-[1.4rem] border border-dashed border-slate-200 bg-white p-4 sm:p-6">
          <div className="w-full max-w-4xl">
            <LivePreview />
          </div>
        </div>
        <LiveError className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 font-mono text-sm text-rose-700" />
      </LiveProvider>
    </section>
  );
}
