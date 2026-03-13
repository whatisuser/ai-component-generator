import type { ComponentGeneration, GenerationProvider } from "@/lib/generation/types";

type MockComponentTemplate = {
  match: (prompt: string) => boolean;
  componentName: string;
  createCode: (prompt: string) => string;
};

const templates: MockComponentTemplate[] = [
  {
    match: (prompt) => /pricing|tier|plan/i.test(prompt),
    componentName: "PricingTiers",
    createCode: (prompt) => `export default function PricingTiers() {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      description: "For early projects shipping their first polished workflow.",
      features: ["1 workspace", "Basic analytics", "Email support"],
      cta: "Start free"
    },
    {
      name: "Growth",
      price: "$79",
      description: "For teams that need collaboration, experiments, and scale.",
      features: ["Unlimited workspaces", "Advanced analytics", "Priority support"],
      cta: "Choose Growth",
      featured: true
    },
    {
      name: "Scale",
      price: "$199",
      description: "For mature teams managing multiple products and stakeholders.",
      features: ["Custom permissions", "Dedicated onboarding", "Quarterly strategy review"],
      cta: "Talk to sales"
    }
  ];

  return (
    <section className="mx-auto w-full max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-2xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Generated from prompt
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">
          ${escapeTemplateLiteral(prompt)}
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Three tiers with clear hierarchy, a featured middle plan, and CTA emphasis.
        </p>
      </div>
      <div className="mt-10 grid gap-6 @lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={\`flex flex-col rounded-[1.75rem] border px-6 py-7 transition \${
              plan.featured
                ? "border-amber-300 bg-gradient-to-b from-amber-300/20 to-white/5 shadow-xl"
                : "border-white/10 bg-white/5"
            }\`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              {plan.featured ? (
                <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950">
                  Most popular
                </span>
              ) : null}
            </div>
            <p className="mt-5 text-5xl font-semibold tracking-tight">{plan.price}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-amber-300">
                    +
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={\`mt-8 rounded-full px-4 py-3 text-sm font-semibold transition \${
                plan.featured
                  ? "bg-amber-300 text-slate-950 hover:bg-amber-200"
                  : "bg-white text-slate-950 hover:bg-slate-100"
              }\`}
            >
              {plan.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}`,
  },
  {
    match: (prompt) => /dashboard|stats|analytics|metric/i.test(prompt),
    componentName: "AnalyticsOverview",
    createCode: (prompt) => `export default function AnalyticsOverview() {
  const metrics = [
    { label: "Revenue", value: "$128K", delta: "+14%" },
    { label: "Conversion", value: "4.8%", delta: "+0.9%" },
    { label: "New users", value: "2,341", delta: "+18%" }
  ];

  return (
    <section className="mx-auto grid w-full max-w-5xl gap-6 rounded-[2rem] bg-white p-6 text-slate-900 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)] @lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Weekly dashboard
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">
          ${escapeTemplateLiteral(prompt)}
        </h2>
        <div className="mt-8 grid gap-4 @sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
              <p className="mt-2 text-sm font-medium text-cyan-300">{metric.delta} vs last week</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Highlights
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
            <li>Traffic quality improved across paid and organic channels.</li>
            <li>Activation steps are converging into a tighter onboarding funnel.</li>
            <li>Enterprise pipeline grew after launching the comparison page refresh.</li>
          </ul>
        </div>
        <button
          type="button"
          className="mt-8 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View full report
        </button>
      </div>
    </section>
  );
}`,
  },
];

function escapeTemplateLiteral(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function defaultComponent(prompt: string) {
  return `export default function GeneratedComponent() {
  const highlights = [
    "Self-contained TSX output",
    "Tailwind utility classes",
    "Structured for live preview"
  ];

  return (
    <section className="mx-auto w-full max-w-3xl rounded-[2rem] bg-white p-8 text-slate-900 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)]">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
        Generated component
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight">
        ${escapeTemplateLiteral(prompt)}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">
        This fallback template keeps the flow working for arbitrary prompts while preserving
        the same API shape a real LLM provider would return.
      </p>
      <div className="mt-8 grid gap-4 @sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}`;
}

export class MockGenerationProvider implements GenerationProvider {
  async generateComponent(prompt: string): Promise<ComponentGeneration> {
    const template = templates.find((entry) => entry.match(prompt));
    const componentName = template?.componentName ?? "GeneratedComponent";
    const code = template?.createCode(prompt) ?? defaultComponent(prompt);

    await new Promise((resolve) => setTimeout(resolve, 900));

    return {
      prompt,
      componentName,
      code,
    };
  }
}
