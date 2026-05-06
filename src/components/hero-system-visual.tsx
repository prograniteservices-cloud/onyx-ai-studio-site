import { RefractiveCore } from "./refractive-core";

export function HeroSystemVisual() {
  return (
    <div className="hero-system-visual relative min-w-0 w-full overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
      <RefractiveCore />
      
      <div className="hero-ticker mt-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
        <div className="hero-ticker-track flex w-max items-center gap-4">
          {["Inventory feed", "Workflow map", "Search layer", "Guardrails", "Content system", "Lead routing", "Inventory feed", "Workflow map", "Search layer", "Guardrails", "Content system", "Lead routing"].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-white/30 bg-white/20 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
