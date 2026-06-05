import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageTexture } from "@/components/ui/PageTexture";
import { RevenueSystemVisual } from "@/components/visuals/RevenueSystemVisual";
import { GrowthAmbientLayer } from "@/components/visuals/GrowthAmbientLayer";
import { openBookStrategyCall } from "@/lib/links";
import { GP_HERO_KEYWORDS, GP_TAGLINE } from "@/lib/growth-partners";
import { PK_GROUPS_TAGLINE } from "@/lib/brand";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight, Clock, Globe, Zap } from "lucide-react";

const trustSignals = [
  { icon: Clock, text: "30 min strategy call" },
  { icon: Zap, text: "24 hr response" },
  { icon: Globe, text: "Remote-first · India-wide" },
];

export function HeroSection() {
  return (
    <section id="hero" className="hero-revops relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden text-white">
      <GrowthAmbientLayer />
      <PageTexture variant="saas-grid" opacity={0.85} />
      <PageTexture variant="grain" opacity={0.4} />

      <div className="container-padding relative z-10 w-full hero-section-padding">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <p className="editorial-kicker mb-4 justify-center lg:justify-start text-brand-cyan/80">
              {PK_GROUPS_TAGLINE}
            </p>

            <span className="growth-badge mb-6">{GP_TAGLINE}</span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-display text-white mb-5 gp-hero-glow">
              Revenue systems your team can{" "}
              <span className="text-gradient-brand">run without you</span>
            </h1>

            <p className="text-base md:text-lg text-slate-300/90 leading-relaxed mb-5 max-w-md mx-auto lg:mx-0">
              Outbound, CRM, and GTM workflows for founder-led companies. Pipeline that scales without
              heroics.
            </p>

            <ul className="flex flex-wrap gap-1.5 mb-8 justify-center lg:justify-start">
              {GP_HERO_KEYWORDS.map((kw) => (
                <li key={kw} className="gp-keyword-chip">
                  {kw}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center lg:justify-start">
              <Button
                onClick={openBookStrategyCall}
                className="h-12 px-8 text-base rounded-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-teal hover:to-brand-cyan text-white font-semibold gp-btn-glow"
              >
                Book Strategy Call
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("what-we-solve")}
                className="h-12 px-8 text-base rounded-full border-white/20 text-white hover:bg-white/10 bg-white/5"
              >
                See what we build
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start">
              {trustSignals.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-brand-cyan/70" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 hidden sm:block lg:translate-x-2"
          >
            <div className="gp-hero-panel-glow" aria-hidden />
            <div className="gp-hero-panel relative">
              <RevenueSystemVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
