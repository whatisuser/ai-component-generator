type StateProps = {
  title: string;
  description: string;
  invert?: boolean;
};

function stateClasses(invert = false) {
  return invert
    ? "border-slate-800 text-slate-200"
    : "border-slate-200 text-slate-700";
}

export function EmptyState({ title, description, invert }: StateProps) {
  return (
    <section
      className={`flex min-h-[20rem] flex-1 items-center justify-center rounded-[1.75rem] border bg-transparent p-6 text-center ${stateClasses(invert)}`}
    >
      <div className="max-w-md space-y-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className={invert ? "text-slate-400" : "text-slate-500"}>
          {description}
        </p>
      </div>
    </section>
  );
}

export function LoadingState({ title, description, invert }: StateProps) {
  return (
    <section
      className={`flex min-h-[20rem] flex-1 items-center justify-center rounded-[1.75rem] border p-6 ${stateClasses(invert)}`}
    >
      <div className="max-w-md text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-amber-200 border-t-amber-500" />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className={invert ? "mt-2 text-slate-400" : "mt-2 text-slate-500"}>
          {description}
        </p>
      </div>
    </section>
  );
}

export function ErrorState({ title, description }: StateProps) {
  return (
    <section className="flex min-h-[20rem] flex-1 items-center justify-center rounded-[1.75rem] border border-rose-200 bg-rose-50 p-6 text-center text-rose-900">
      <div className="max-w-md space-y-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-rose-700">{description}</p>
      </div>
    </section>
  );
}
