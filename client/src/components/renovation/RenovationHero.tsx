import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroStats } from "@/components/ui/HeroStats";
import { PageTexture } from "@/components/ui/PageTexture";
import { openBookRenovationVisit } from "@/lib/links";
import {
  RENOVATION_PRIMARY_CTA,
  RENOVATION_CALCULATOR_CTA,
  RENOVATION_TAGLINE_ALT,
} from "@/lib/renovation";
import { PK_GROUPS_TAGLINE } from "@/lib/brand";
import { scrollToSection } from "@/lib/scroll";
import {
  ArrowRight,
  Hammer,
  PaintBucket,
  Ruler,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "Free", label: "Site visit" },
  { value: "48 hr", label: "Estimate turnaround" },
  { value: "Civil", label: "Engineering-led" },
];

const scopeTags = ["Kitchen", "Bath", "Flooring", "Paint", "Electrical"];

export function RenovationHero() {
  return (
    <section id="reno-hero" className="reno-hero relative min-h-screen flex items-center">
      <PageTexture variant="construction" />
      <PageTexture variant="grain" opacity={0.35} />

      <div className="container-padding relative z-10 w-full hero-section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <p className="editorial-kicker mb-4 justify-center lg:justify-start text-reno-gold-light/80">
              {PK_GROUPS_TAGLINE}
            </p>
            <span className="reno-badge mb-6">{RENOVATION_TAGLINE_ALT}</span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-display mb-6">
              Upgrade the space you already own{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-reno-gold-light to-reno-gold">
                thoughtfully
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-copy mb-8">
              Homes, villas, apartments, and commercial spaces in Trichy. We plan, coordinate, and
              execute renovations with clear costing, not open-ended contractor surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
              <Button
                onClick={openBookRenovationVisit}
                className="h-12 px-8 rounded-full bg-gradient-to-r from-reno-gold to-reno-gold-muted text-stone-950 font-bold shadow-lg shadow-reno-gold/25"
              >
                {RENOVATION_PRIMARY_CTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("reno-calculator")}
                className="h-12 px-8 rounded-full border-reno-gold/40 text-reno-gold-light hover:bg-reno-gold/10 bg-white/5"
              >
                {RENOVATION_CALCULATOR_CTA}
              </Button>
            </div>

            <HeroStats stats={stats} theme="renovation" className="max-w-md mx-auto lg:mx-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="panel-reno p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[10px] uppercase tracking-label text-reno-gold/90 flex items-center gap-2">
                  <Ruler className="h-3.5 w-3.5" />
                  Sample scope · 1,200 sq ft apartment
                </p>
                <span className="text-[10px] font-mono text-slate-500">Trichy</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="reno-glass p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-label text-slate-500">Before</p>
                    <Hammer className="h-4 w-4 text-slate-600" />
                  </div>
                  <div className="h-36 rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30 texture-construction" />
                    <div className="absolute bottom-3 left-3 right-3 text-[10px] text-slate-400 font-medium">
                      Dated finishes · cramped kitchen
                    </div>
                  </div>
                </div>

                <div className="reno-glass p-5 space-y-3 mt-6 border-reno-gold/30">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-label text-reno-gold">After</p>
                    <Sparkles className="h-4 w-4 text-reno-gold" />
                  </div>
                  <div className="h-36 rounded-xl bg-gradient-to-br from-reno-gold/25 via-slate-700 to-slate-800 flex items-end p-3 relative overflow-hidden">
                    <div className="absolute top-3 right-3">
                      <PaintBucket className="h-8 w-8 text-reno-gold/40" />
                    </div>
                    <p className="text-[10px] text-slate-200 font-medium relative z-10">
                      Modular kitchen · refreshed bath
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {scopeTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                Every project starts with a site walk. We measure, listen, and quote before work begins.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
