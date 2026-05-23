import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RealEstateVisual } from "@/components/visuals/RealEstateVisual";
import { openBookStrategyCall } from "@/lib/links";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight } from "lucide-react";

export function RealEstateHero() {
  return (
    <section id="re-hero" className="hero-revops relative min-h-screen flex items-center overflow-hidden text-white">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="hero-glow-orb w-[600px] h-[400px] -top-20 right-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        className="container-padding relative z-10 w-full pt-24 pb-16 lg:pt-28 lg:pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-sm font-medium text-brand-cyan tracking-wide mb-2">
              Converra Real Estate, Consultancy & Renovation Solutions
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">
              Part of PK Groups
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-white mb-6">
              Modern Spaces. Structured Execution.
            </h1>

            <p className="text-lg md:text-xl text-slate-300/95 leading-relaxed mb-10">
              Converra Real Estate, Consultancy & Renovation Solutions helps homeowners, commercial spaces, and businesses transform properties through modern renovation, civil engineering consultancy, project execution, and real estate support services.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={() => openBookStrategyCall(() => scrollToSection("re-contact"))}
                className="h-12 px-8 text-base bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shadow-xl shadow-brand-blue/30"
              >
                Book a Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("re-services")}
                className="h-12 px-8 text-base btn-secondary-outline"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <RealEstateVisual />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
