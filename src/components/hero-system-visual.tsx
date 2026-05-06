import { RefractiveCore } from "./refractive-core";

export function HeroSystemVisual() {
  return (
    <div className="hero-system-visual relative min-w-0 w-full overflow-hidden rounded-lg border border-border p-3 shadow-sm bg-background/30 backdrop-blur-md">
      <RefractiveCore />
      
      <div className="hero-ticker mt-3 overflow-hidden rounded-md border border-border/80 bg-background/72 px-3 py-2">
        <div className="hero-ticker-track flex w-max items-center gap-3">
          {["Inventory feed", "Workflow map", "Search layer", "Guardrails", "Content system", "Lead routing", "Inventory feed", "Workflow map", "Search layer", "Guardrails", "Content system", "Lead routing"].map((item, index) => (
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
