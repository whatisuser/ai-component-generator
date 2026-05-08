"use client";

import { useState } from "react";
import { EmptyState, LoadingState } from "@/components/status-state";

type CodePanelProps = {
  code: string;
  isLoading: boolean;
};

export function CodePanel({ code, isLoading }: CodePanelProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1600);
    } catch {
      setCopyState("failed");
      setTimeout(() => setCopyState("idle"), 2000);
    }
  }

  return (
    <section className="flex min-h-[16rem] flex-col rounded-[1.75rem] border border-[var(--border)] bg-slate-950 text-slate-100 shadow-[var(--shadow)] lg:min-h-[28rem]">
      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Generated code
          </p>
          <h2 className="mt-1 text-lg font-semibold text-white">
            React + Tailwind output
          </h2>
        </div>
        <div>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!code || isLoading}
            title={!code ? "Generate a component first to copy its code" : undefined}
            className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-950"
          >
            {copyState === "copied"
              ? "Copied!"
              : copyState === "failed"
                ? "Failed"
                : "Copy code"}
          </button>
        </div>
      </div>
      <div className="min-w-0 overflow-auto max-h-[20rem] lg:max-h-[32rem]">
        {isLoading ? (
          <LoadingState
            title="Generating component"
            description="The mock provider is assembling the TSX response."
            invert
          />
        ) : code ? (
          <pre className="h-full p-5 text-sm leading-7 text-slate-200 overflow-x-auto whitespace-pre-wrap break-all min-w-0">
            <code>{code}</code>
          </pre>
        ) : (
          <EmptyState
            title="Source code will appear here"
            description="Run a prompt to inspect the full generated component output."
            invert
          />
        )}
      </div>
    </section>
  );
}
