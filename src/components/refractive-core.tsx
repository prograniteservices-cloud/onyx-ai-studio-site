"use client";

import { motion } from "framer-motion";

export function RefractiveCore() {
  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-visible py-10 text-center">
      {/* Main Content */}
      <div className="relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="font-serif text-5xl italic leading-tight text-foreground md:text-7xl">
            The Art of <span className="font-bold not-italic text-primary">Refinement</span>
          </h2>
          <p className="mx-auto max-w-xl font-light tracking-wide text-muted-foreground md:text-xl">
            Transforming raw chaos into crystalline intelligence.
          </p>
        </motion.div>

        {/* Refractive Interface (Overlays the Background Video) */}
        <div className="relative mx-auto mt-12 flex aspect-square w-full max-w-2xl items-center justify-center md:aspect-video">
          {/* Glass Panel HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="group relative z-20 h-full w-full max-w-lg cursor-pointer overflow-hidden rounded-3xl border border-white/40 bg-white/10 shadow-[0_0_50px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition-all duration-700"
          >
            {/* HUD Elements */}
            <div className="absolute inset-x-0 top-0 h-10 border-b border-white/30 bg-white/10 flex items-center px-6 justify-between">
              <div className="flex gap-1.5">
                <div className="size-2 rounded-full bg-primary/60" />
                <div className="size-2 rounded-full bg-primary/30" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">Synthesis Protocol v3.1</div>
            </div>

            {/* Inner Reflections */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 pointer-events-none" />
            
            {/* Centered Focus Ring */}
            <div className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/10" 
            />
          </motion.div>

          {/* Floating Data Nodes (HUD) */}
          <div className="absolute inset-0 pointer-events-none">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -100 }}
                animate={{ opacity: 0.9, x: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1 + i * 0.3,
                  ease: "easeOut",
                }}
                className={`absolute rounded-lg border border-white/50 bg-white/60 p-3 shadow-lg backdrop-blur-md ${
                  i === 1 ? "left-0 top-1/4 w-32 -rotate-3" : 
                  i === 2 ? "right-0 top-1/3 w-40 rotate-2" : 
                  "bottom-1/4 left-10 w-36 rotate-1"
                }`}
              >
                <div className="mb-2 h-1 w-8 rounded-full bg-primary/40" />
                <div className="h-1 w-16 rounded-full bg-primary/20" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="pt-4"
        >
          <button className="group relative overflow-hidden rounded-full border border-primary/30 bg-white/60 px-12 py-5 text-sm font-bold tracking-[0.2em] text-foreground backdrop-blur-xl transition-all hover:bg-white/80 hover:shadow-2xl">
            <span className="relative z-10">BEGIN SYNTHESIS</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] transition-transform duration-1000 group-hover:translate-x-[200%]" />
          </button>
        </motion.div>
      </div>

      {/* Feature Grid Sub-Preview */}
      <div className="mt-32 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
         {[
           { title: "Refractive Logic", body: "Advanced models that clarify data, removing noise to emphasize core insights." },
           { title: "Ethereal Depth", body: "Layered translucency ensuring every interaction feels integrated." },
           { title: "Intelligence Flow", body: "Watch raw data stream through the core and emerge as actionable insights." }
         ].map((feature, idx) => (
           <motion.div 
             key={idx}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: idx * 0.2 }}
             className="rounded-2xl border border-white/20 bg-white/30 p-8 backdrop-blur-xl hover:bg-white/40 transition-colors shadow-sm"
           >
              <h3 className="mb-2 font-bold text-lg">{feature.title}</h3>
              <p className="text-sm font-light text-muted-foreground">{feature.body}</p>
           </motion.div>
         ))}
      </div>
    </div>
  );
}
