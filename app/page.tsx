import { GeneratorWorkspace } from "@/components/generator-workspace";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.2),_transparent_28%),linear-gradient(135deg,_#fffaf0_0%,_#f8fafc_55%,_#eef2ff_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_20px_80px_-32px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 lg:max-w-3xl">
            <span className="w-fit rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-900">
              App Router Demo
            </span>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              AI Component Generator
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Turn a plain-English prompt into a React and Tailwind component,
              inspect the generated source, and verify the result with a live
              preview before wiring in a real model provider.
            </p>
          </div>
        </section>
        <GeneratorWorkspace />
      </div>
    </main>
  );
}
