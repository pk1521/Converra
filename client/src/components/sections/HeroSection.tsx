import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RevenueSystemVisual } from "@/components/visuals/RevenueSystemVisual";
import { GrowthAmbientLayer } from "@/components/visuals/GrowthAmbientLayer";
import { openBookStrategyCall } from "@/lib/links";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="hero-revops relative min-h-screen flex items-center overflow-hidden text-white">
      <GrowthAmbientLayer intense />

      <div className="container-padding relative z-10 w-full pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block text-sm font-semibold text-brand-cyan tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-brand-teal/40 bg-brand-teal/10"
            >
              Revenue is engineered.
            </motion.p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-white mb-6 gp-hero-glow">
              Helping Business With Additional Revenue &{" "}
              <span className="text-gradient-brand">Growth</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300/95 leading-relaxed mb-10">
              Converra Growth Partners helps startups and growth-stage companies build scalable outbound systems, CRM workflows, GTM execution frameworks, and revenue operations that drive predictable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={openBookStrategyCall}
                className="h-12 px-8 text-base rounded-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-teal hover:to-brand-cyan text-white font-semibold gp-btn-glow transition-all duration-300"
              >
                Book Strategy Call
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("what-we-solve")}
                className="h-12 px-8 text-base rounded-full btn-secondary-outline border-brand-cyan/30 hover:border-brand-cyan/60"
              >
                Explore Revenue Systems
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-slate-400/90">
              Predictable growth needs structured execution. Scalable companies are built on systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-blue/20 via-brand-teal/20 to-brand-cyan/20 blur-2xl animate-pulse" />
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <RevenueSystemVisual />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
