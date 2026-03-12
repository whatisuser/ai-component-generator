"use client";

import { useState } from "react";

import { CodePanel } from "@/components/code-panel";
import { PreviewPanel } from "@/components/preview-panel";
import { PromptForm } from "@/components/prompt-form";
import { EmptyState } from "@/components/status-state";
import { createPreviewSource } from "@/lib/preview";
import type { GenerationResponse } from "@/lib/generation/types";

const INITIAL_PROMPT = "Build a pricing card with three tiers";

export function GeneratorWorkspace() {
  const [prompt, setPrompt] = useState(INITIAL_PROMPT);
  const [result, setResult] = useState<GenerationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleGenerate() {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt) {
      setError("Enter a prompt before generating a component.");
      setResult(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: trimmedPrompt }),
      });

      const payload = (await response.json()) as
        | GenerationResponse
        | { error: string };

      if (!response.ok || "error" in payload) {
        throw new Error(
          "error" in payload ? payload.error : "Generation failed.",
        );
      }

      setResult(payload);
    } catch (requestError) {
      setResult(null);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Generation failed.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  const previewSource = result ? createPreviewSource(result.code) : null;

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.5fr]">
      <div className="flex flex-col gap-6">
        <PromptForm
          prompt={prompt}
          onPromptChange={setPrompt}
          onSubmit={handleGenerate}
          isLoading={isLoading}
        />
        <CodePanel code={result?.code ?? ""} isLoading={isLoading} />
      </div>
      <div className="flex min-h-[24rem] flex-col lg:min-h-[48rem]">
        {!result && !isLoading && !error ? (
          <EmptyState
            title="No component generated yet"
            description="Start with a UI prompt and the generated React + Tailwind code will appear here with a live preview."
          />
        ) : (
          <PreviewPanel
            code={previewSource?.previewCode ?? ""}
            rawCode={result?.code ?? ""}
            componentName={previewSource?.componentName ?? "GeneratedComponent"}
            isLoading={isLoading}
            error={error}
          />
        )}
      </div>
    </section>
  );
}
