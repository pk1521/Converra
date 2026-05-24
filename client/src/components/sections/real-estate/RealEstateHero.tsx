import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RealEstateVisual } from "@/components/visuals/RealEstateVisual";
import { ClassyAmbientLayer } from "@/components/visuals/ClassyAmbientLayer";
import { openBookConsultation } from "@/lib/links";
import {
  CONSULTANCY_SUMMARY,
  REAL_ESTATE_SALE_GUARANTEE,
  REAL_ESTATE_SCHEDULE_CTA,
} from "@/lib/real-estate";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight, Home, MapPin, FileCheck } from "lucide-react";

const siteStats = [
  { icon: Home, label: "Properties Sold", value: "100+" },
  { icon: MapPin, label: "Avg. Close Time", value: "3 Mo" },
  { icon: FileCheck, label: "Approvals Cleared", value: "100%" },
];

export function RealEstateHero() {
  return (
    <section id="re-hero" className="hero-luxury relative min-h-screen flex items-center overflow-hidden text-slate-100">
      <ClassyAmbientLayer variant="dark" />

      <div className="container-padding relative z-10 w-full pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <span className="inline-block text-xs font-semibold text-brand-cyan tracking-[0.2em] uppercase mb-4 px-3 py-1 rounded-full border border-brand-teal/40 bg-brand-teal/10">
              Consultancy & Real Estate
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.12] text-white mb-6">
              Properties That{" "}
              <span className="text-brand-cyan">Sell Fast.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200/90 leading-relaxed mb-4">
              Converra helps owners, developers, and investors sell residential plots, commercial property, and land with structured marketing, buyer outreach, and end-to-end closing support.
            </p>
            <p className="text-base text-slate-300/90 leading-relaxed mb-6">
              {CONSULTANCY_SUMMARY}
            </p>

            <motion.div className="rounded-2xl border border-brand-teal/30 bg-brand-navy/50 backdrop-blur px-5 py-4 mb-8 text-left">
              <p className="text-sm text-brand-cyan font-semibold uppercase tracking-wide mb-1">Fast-sale focus</p>
              <p className="text-sm text-slate-200/90 leading-relaxed">{REAL_ESTATE_SALE_GUARANTEE}</p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={openBookConsultation}
                className="h-12 px-8 text-base rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold shadow-lg shadow-brand-teal/30"
              >
                {REAL_ESTATE_SCHEDULE_CTA}
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("re-services")}
                className="h-12 px-8 text-base rounded-full border-brand-teal/50 text-brand-cyan hover:bg-brand-teal/10 btn-secondary-outline"
              >
                View Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <motion.div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {siteStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-xl border border-brand-teal/25 bg-brand-navy/60 backdrop-blur px-3 py-4 text-center"
                >
                  <stat.icon className="h-4 w-4 text-brand-cyan mx-auto mb-2" />
                  <p className="text-lg font-display font-bold text-white">{stat.value}</p>
                  <p className="text-[9px] text-brand-grey uppercase tracking-[0.15em] leading-tight mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 border border-brand-teal/20 rounded-2xl" />
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <RealEstateVisual />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
