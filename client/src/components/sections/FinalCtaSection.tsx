import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openBookStrategyCall } from "@/lib/links";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight, Layers, Workflow, BarChart3 } from "lucide-react";

const trustItems = [
  { icon: Layers, label: "GTM Infrastructure" },
  { icon: Workflow, label: "Revenue Workflows" },
  { icon: BarChart3, label: "Pipeline Systems" },
];

export function FinalCtaSection() {
  return (
    <section id="cta" className="section-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-violet/20 rounded-full blur-[120px]" />
      </div>

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
            Build the revenue infrastructure your business needs to scale. Converra Growth Partners is ready when you are.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block mb-10">
            <Button
              onClick={() => openBookStrategyCall(() => scrollToSection("footer-contact"))}
              className="h-14 px-10 text-lg font-semibold bg-brand-blue hover:bg-brand-blue-dark text-white shadow-xl shadow-brand-blue/30"
            >
              Book A Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

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
