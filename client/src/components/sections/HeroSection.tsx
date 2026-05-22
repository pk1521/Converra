import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RevenueSystemVisual } from "@/components/visuals/RevenueSystemVisual";
import { openBookStrategyCall } from "@/lib/links";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="hero-revops relative min-h-screen flex items-center overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div
          className="hero-glow-orb w-[min(100vw,700px)] h-[450px] -top-32 -right-20 opacity-35"
          style={{
            background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="hero-glow-orb w-[500px] h-[350px] top-1/2 -left-24 -translate-y-1/2 opacity-25"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-padding relative z-10 w-full pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <p className="text-sm font-medium text-brand-cyan tracking-wide mb-4">
              Revenue is engineered.
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-white mb-6">
              Helping Business With Additional Revenue & Growth
            </h1>

            <p className="text-lg md:text-xl text-slate-300/95 leading-relaxed mb-10">
              Converra Growth Partners helps startups and growth-stage companies build scalable outbound systems, CRM workflows, GTM execution frameworks, and revenue operations that drive predictable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={() => openBookStrategyCall(() => scrollToSection("footer-contact"))}
                className="h-12 px-8 text-base bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shadow-xl shadow-brand-blue/30 transition-all duration-300"
              >
                Book Strategy Call
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("what-we-solve")}
                className="h-12 px-8 text-base btn-secondary-outline"
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
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <RevenueSystemVisual />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
