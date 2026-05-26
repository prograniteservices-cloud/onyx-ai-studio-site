import { CheckCircle2 } from "lucide-react";

const operatingLayers = [
  {
    title: "Inputs",
    items: ["Calls", "Website leads", "Quote details", "Company files"],
  },
  {
    title: "Structure",
    items: ["Lead records", "Knowledge sources", "Guardrails", "Handoffs"],
  },
  {
    title: "Actions",
    items: ["Summaries", "Scheduling", "Follow-up", "Internal answers"],
  },
];

export function RefractiveCore() {
  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,58,90,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(24,58,90,0.045)_1px,transparent_1px)] bg-[length:36px_36px]" />
      <div className="relative grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="editorial-rule pt-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
            System map
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground">
            Messy demand becomes an operating layer.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            The service model is simple: collect business inputs, structure
            them safely, then route the next action to the right person or
            assistant.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {operatingLayers.map((layer, index) => (
            <section
              key={layer.title}
              className="relative rounded-md border border-border bg-background/88 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-2xl font-bold">{layer.title}</h3>
                <span className="grid size-8 place-items-center rounded-md bg-primary font-mono text-xs font-bold text-primary-foreground">
                  {index + 1}
                </span>
              </div>
              <ul className="mt-5 grid gap-3">
                {layer.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm font-semibold leading-5">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
