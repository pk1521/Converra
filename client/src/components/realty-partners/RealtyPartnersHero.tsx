import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openBookRealtyConsultation } from "@/lib/links";
import { REALTY_PARTNERS_TAGLINE, REALTY_PRIMARY_CTA } from "@/lib/realty-partners";
import { PK_GROUPS_TAGLINE } from "@/lib/brand";
import { ArrowRight, TrendingUp } from "lucide-react";

function SkylineSvg() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-[42%] text-realty-gold/20"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0,320 L0,220 L80,200 L160,210 L240,180 L320,190 L400,160 L480,170 L560,140 L640,150 L720,120 L800,130 L880,100 L960,110 L1040,90 L1120,100 L1200,80 L1280,90 L1360,70 L1440,85 L1440,320 Z"
      />
      <path
        fill="currentColor"
        fillOpacity="0.5"
        d="M0,320 L0,250 L120,230 L240,240 L360,210 L480,220 L600,190 L720,200 L840,170 L960,180 L1080,150 L1200,160 L1320,140 L1440,155 L1440,320 Z"
      />
    </svg>
  );
}

export function RealtyPartnersHero() {
  return (
    <section id="rp-hero" className="realty-hero relative min-h-screen flex items-center">
      <div className="realty-skyline" />
      <SkylineSvg />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-realty-gold/10 blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-padding relative z-10 w-full pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium tracking-[0.25em] uppercase text-realty-grey-light mb-3"
          >
            {PK_GROUPS_TAGLINE}
          </motion.p>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="realty-badge mb-6"
          >
            {REALTY_PARTNERS_TAGLINE} · Trichy
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6"
          >
            Accelerating{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-realty-gold-light to-realty-gold">
              Real Estate Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Converra Realty Partners helps builders, developers and land promoters sell faster through
            strategic marketing, lead generation, sales systems and growth partnerships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col items-center gap-5"
          >
            <Button
              onClick={openBookRealtyConsultation}
              className="h-12 px-8 text-base rounded-full bg-gradient-to-r from-realty-gold to-realty-gold-muted hover:from-realty-gold-light hover:to-realty-gold text-realty-navy font-bold shadow-lg shadow-realty-gold/25"
            >
              {REALTY_PRIMARY_CTA}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm md:text-base text-slate-400 max-w-xl text-center leading-relaxed">
              <span className="text-realty-gold-light font-medium">Partner with Converra</span> as your
              external growth department — sales, marketing, and inventory movement aligned to your project
              goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-slate-400"
          >
            <span className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-realty-gold" />
              Sales & Marketing Partner
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-realty-gold" />
              Project Growth Specialists
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
