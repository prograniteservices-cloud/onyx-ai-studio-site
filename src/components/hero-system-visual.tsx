import Image from "next/image";

const workflowItems = [
  "Inventory feed",
  "Workflow map",
  "Search layer",
  "Guardrails",
  "Content system",
  "Lead routing",
];

const glassChips = [
  {
    label: "Messy inputs",
    value: "CSV, calls, notes",
    className: "left-4 top-4",
  },
  {
    label: "System layer",
    value: "Search + workflow",
    className: "right-4 top-1/3",
  },
  {
    label: "Useful output",
    value: "Actions, pages, answers",
    className: "bottom-5 left-5",
  },
];

export function HeroSystemVisual() {
  return (
    <div className="hero-system-visual glass-panel relative min-w-0 w-full overflow-hidden rounded-lg border border-border p-3 shadow-sm">
      <div className="hero-map-stage relative overflow-hidden rounded-md border border-border/80 bg-background">
        <Image
          src="/onyx-systems-map.svg"
          alt="Diagram showing messy inputs becoming an organized AI operating system"
          width={960}
          height={760}
          priority
          className="hero-map h-full w-full object-cover object-center"
        />
        <div className="hero-scan-line" aria-hidden="true" />
        <div className="hero-flow-line hero-flow-line-one" aria-hidden="true" />
        <div className="hero-flow-line hero-flow-line-two" aria-hidden="true" />
        <div className="hero-node hero-node-one" aria-hidden="true" />
        <div className="hero-node hero-node-two" aria-hidden="true" />
        <div className="hero-node hero-node-three" aria-hidden="true" />
        {glassChips.map((chip, index) => (
          <div
            key={chip.label}
            className={`hero-glass-chip absolute hidden min-w-36 rounded-md border border-white/55 bg-card/58 px-3 py-2 text-xs shadow-sm backdrop-blur-xl xl:block ${chip.className}`}
            style={{ animationDelay: `${index * 900}ms` }}
          >
            <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-accent">
              {chip.label}
            </p>
            <p className="mt-1 font-semibold text-foreground">{chip.value}</p>
          </div>
        ))}
      </div>
      <div className="hero-ticker mt-3 overflow-hidden rounded-md border border-border/80 bg-background/72 px-3 py-2">
        <div className="hero-ticker-track flex w-max items-center gap-3">
          {[...workflowItems, ...workflowItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
