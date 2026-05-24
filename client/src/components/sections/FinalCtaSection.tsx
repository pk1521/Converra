import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openBookStrategyCall } from "@/lib/links";
import { GP_SCHEDULE_CTA } from "@/lib/growth-partners";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight, Layers, Workflow, BarChart3 } from "lucide-react";

import { GrowthAmbientLayer } from "@/components/visuals/GrowthAmbientLayer";

const trustItems = [
  { icon: Layers, label: "GTM Infrastructure" },
  { icon: Workflow, label: "Revenue Workflows" },
  { icon: BarChart3, label: "Pipeline Systems" },
];

export function FinalCtaSection() {
  return (
    <section id="cta" className="section-dark section-padding relative overflow-hidden">
      <GrowthAmbientLayer intense />
      <motion.div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-blue/10 via-transparent to-brand-teal/10 pointer-events-none" />

      <div className="container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Growth without systems creates chaos.
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Get a 30-minute pipeline audit: where deals stall, what&apos;s missing in your CRM, and whether the Sprint fits.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block mb-4">
            <Button
              onClick={openBookStrategyCall}
              className="h-14 px-10 text-lg font-semibold rounded-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-cyan text-white gp-btn-glow"
            >
              {GP_SCHEDULE_CTA}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <p className="text-sm text-slate-500 mb-10">
            Prefer to schedule below?{" "}
            <button
              type="button"
              onClick={() => scrollToSection("book-a-call")}
              className="text-brand-cyan hover:text-brand-blue transition-colors underline-offset-2 hover:underline"
            >
              Book a call below
            </button>
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-slate-400">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="h-5 w-5 text-brand-cyan" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
