type PromptFormProps = {
  prompt: string;
  onPromptChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
};

export function PromptForm({
  prompt,
  onPromptChange,
  onSubmit,
  isLoading,
}: PromptFormProps) {
  return (
    <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow)] backdrop-blur sm:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Prompt
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Describe the component you want
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            The mock generator returns production-shaped TSX so the UI and API
            contract work before integrating a real model provider.
          </p>
        </div>
        <label className="sr-only" htmlFor="prompt">
          Component prompt
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          placeholder="Build a pricing card with three tiers"
          className="min-h-36 w-full rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 shadow-inner outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Generates a single self-contained React component
          </p>
          <button
            type="button"
            onClick={onSubmit}
            disabled={isLoading}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isLoading ? "Generating..." : "Generate component"}
          </button>
        </div>
      </div>
    </section>
  );
}
