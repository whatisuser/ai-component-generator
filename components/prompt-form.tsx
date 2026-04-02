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
          onKeyDown={(event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
              event.preventDefault();
              if (!isLoading && prompt.trim()) {
                onSubmit();
              }
            }
          }}
          disabled={isLoading}
          placeholder="Build a pricing card with three tiers"
          className="min-h-36 w-full rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 shadow-inner outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Generates a single self-contained React component
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="hidden items-center gap-1 text-slate-400 sm:flex" aria-hidden="true">
              <span className="text-xs">Press</span>
              <kbd className="flex h-5 items-center justify-center rounded border border-slate-200 bg-slate-50 px-1.5 font-sans text-[10px] font-medium text-slate-500">⌘</kbd>
              <kbd className="flex h-5 items-center justify-center rounded border border-slate-200 bg-slate-50 px-1.5 font-sans text-[10px] font-medium text-slate-500">↵</kbd>
            </div>
            <button
              type="button"
              onClick={onSubmit}
              disabled={isLoading || !prompt.trim()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
            >
              {isLoading && (
                <svg
                  className="h-4 w-4 animate-spin text-white/70"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              {isLoading ? "Generating..." : "Generate component"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
