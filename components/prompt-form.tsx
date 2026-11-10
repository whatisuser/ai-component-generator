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
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      if (!isLoading && prompt.trim()) {
        onSubmit();
      }
    }
  };

  return (
    <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow)] backdrop-blur sm:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Prompt
          </p>
          <h2 id="prompt-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            Describe the component you want
          </h2>
          <p id="prompt-description" className="text-sm leading-6 text-slate-600">
            The mock generator returns production-shaped TSX so the UI and API
            contract work before integrating a real model provider.
          </p>
        </div>
        <textarea
          id="prompt"
          aria-labelledby="prompt-heading prompt-description"
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          placeholder="Build a pricing card with three tiers"
          className="min-h-36 w-full rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 shadow-inner outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Generates a single self-contained React component{" "}
            <span className="hidden sm:inline-block md:hidden lg:inline-block">
              — Press ⌘/Ctrl + Enter to submit
            </span>
          </p>
          <button
            type="button"
            onClick={onSubmit}
            disabled={isLoading || !prompt.trim()}
            title={!prompt.trim() ? "Enter a prompt to generate a component" : undefined}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
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
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
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
