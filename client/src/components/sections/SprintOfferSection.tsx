import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { openBookStrategyCall } from "@/lib/links";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight, Sparkles } from "lucide-react";

const sprintItems = [
  { num: "01", title: "GTM Audit", desc: "Full assessment of your go-to-market stack, channels, and execution gaps." },
  { num: "02", title: "CRM Restructuring", desc: "Rebuild pipeline stages, fields, and views for operational clarity." },
  { num: "03", title: "Outbound Workflow Design", desc: "Architect repeatable prospecting sequences and handoff protocols." },
  { num: "04", title: "Follow-up Automation Mapping", desc: "Map every touchpoint trigger, delay, and escalation rule." },
  { num: "05", title: "Sales Process Optimization", desc: "Document and refine stages from lead to close with clear ownership." },
  { num: "06", title: "Revenue System Architecture", desc: "Deliver the complete blueprint for scalable, founder-independent growth." },
];

export function SprintOfferSection() {
  return (
    <Section id="revenue-engine-sprint" variant="light" className="bg-offwhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-violet/30 bg-brand-violet/5 px-4 py-1.5 text-sm font-medium text-brand-violet mb-6">
            <Sparkles className="h-4 w-4" />
            Signature Offer
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Revenue Engine Sprint
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A premium transformation framework that rebuilds your revenue infrastructure in weeks — not quarters.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border rounded-3xl bg-charcoal p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {sprintItems.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4"
              >
                <span className="font-display text-2xl font-bold text-brand-cyan/80 shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
            <p className="text-slate-300 text-sm md:text-base max-w-lg">
              Founders should lead growth, not manually carry it. The Sprint gives you the system to scale.
            </p>
            <Button
              onClick={() => openBookStrategyCall(() => scrollToSection("footer-contact"))}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shrink-0"
            >
              Book Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
