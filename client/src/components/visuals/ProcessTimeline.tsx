import { motion } from "framer-motion";
import {
  Search,
  Stethoscope,
  Layers,
  Wrench,
  Gauge,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const steps: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Audit",
    desc: "Map your current GTM stack, CRM data, and revenue workflows end to end.",
    icon: Search,
  },
  {
    step: "02",
    title: "Diagnose",
    desc: "Identify bottlenecks, leakage points, and execution gaps across the funnel.",
    icon: Stethoscope,
  },
  {
    step: "03",
    title: "Architect",
    desc: "Design the revenue system blueprint: processes, tools, and automation layers.",
    icon: Layers,
  },
  {
    step: "04",
    title: "Implement",
    desc: "Deploy CRM structures, outbound workflows, and follow-up automation.",
    icon: Wrench,
  },
  {
    step: "05",
    title: "Optimize",
    desc: "Refine conversion paths, pipeline stages, and team adoption metrics.",
    icon: Gauge,
  },
  {
    step: "06",
    title: "Scale",
    desc: "Build repeatable systems that grow revenue without founder dependency.",
    icon: TrendingUp,
  },
];

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-14 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-violet to-brand-cyan/20 z-0" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
        {steps.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative rounded-2xl border border-charcoal-700/10 bg-white p-5 text-center hover:border-brand-blue/30 hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs">
                {item.step}
              </div>
            </div>
            <div className="flex justify-center mb-2">
              <item.icon className="h-5 w-5 text-brand-violet" />
            </div>
            <h3 className="font-display font-semibold text-charcoal mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
