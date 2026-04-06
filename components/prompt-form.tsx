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
            if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
              event.preventDefault();
              if (!isLoading) {
                onSubmit();
              }
            }
          }}
          placeholder="Build a pricing card with three tiers"
          className="min-h-36 w-full rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 shadow-inner outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Generates a single self-contained React component
          </p>
          <button
            type="button"
            onClick={onSubmit}
            disabled={isLoading}
            title="Cmd/Ctrl + Enter to generate"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
          >
            {isLoading ? "Generating..." : "Generate component"}
            {!isLoading && (
              <span className="hidden sm:inline-flex text-slate-400 items-center border border-slate-600 rounded px-1.5 py-0.5 text-[10px] leading-none font-sans">
                <kbd className="font-sans">⌘</kbd>
                <kbd className="font-sans ml-1">↵</kbd>
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
