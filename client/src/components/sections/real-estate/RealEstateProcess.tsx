import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import {
  MessageCircle,
  MapPin,
  PenTool,
  Users,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Consultation & Requirement Understanding",
    desc: "We align on scope, objectives, budget parameters, and transformation goals.",
  },
  {
    step: "02",
    icon: MapPin,
    title: "Site Evaluation & Planning",
    desc: "On-site assessment, structural review, and feasibility mapping.",
  },
  {
    step: "03",
    icon: PenTool,
    title: "Design & Execution Strategy",
    desc: "Detailed plans, material selection, and phased execution roadmap.",
  },
  {
    step: "04",
    icon: Users,
    title: "Project Coordination & Supervision",
    desc: "Vendor management, timeline tracking, and quality oversight on-site.",
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Final Delivery & Transformation",
    desc: "Handover, final inspection, and space ready for use.",
  },
];

export function RealEstateProcess() {
  return (
    <Section id="re-process" variant="charcoal">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="text-brand-cyan text-sm font-medium tracking-wide uppercase mb-3">
            Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-slate-400">
            A structured five-phase approach from consultation to delivery.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/30 bg-charcoal-800 text-brand-blue font-display font-bold text-xs">
                    {item.step}
                  </div>
                </div>
                <div className="flex justify-center mb-3">
                  <item.icon className="h-5 w-5 text-brand-violet" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
