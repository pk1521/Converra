import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import {
  UserX,
  Clock,
  Database,
  GitBranch,
  Settings,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

const painPoints = [
  {
    icon: UserX,
    title: "Founder-dependent sales",
    desc: "Revenue lives in one person's inbox. Deals stall when the founder is unavailable.",
  },
  {
    icon: Clock,
    title: "Inconsistent follow-ups",
    desc: "Leads go cold because follow-up isn't systematized across the team.",
  },
  {
    icon: Database,
    title: "Poor CRM adoption",
    desc: "Your CRM exists but isn't the source of truth for pipeline or execution.",
  },
  {
    icon: GitBranch,
    title: "Fragmented GTM execution",
    desc: "Marketing, sales, and ops run in silos with no unified revenue workflow.",
  },
  {
    icon: Settings,
    title: "Lack of sales systems",
    desc: "No documented process for prospecting, qualification, or closing at scale.",
  },
  {
    icon: TrendingDown,
    title: "Pipeline leakage",
    desc: "Opportunities slip through cracks between stages without visibility or accountability.",
  },
  {
    icon: AlertTriangle,
    title: "Operational chaos",
    desc: "Manual workflows, spreadsheets, and ad-hoc tools create friction instead of velocity.",
  },
];

export function PainPointsSection() {
  return (
    <Section id="pain-points" variant="light">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="brand-badge mb-4">Sound familiar?</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-charcoal mb-4 leading-display">
          Not a lead problem. A systems problem.
        </h2>
        <p className="text-lg text-muted-foreground leading-copy max-w-xl mx-auto">
          Revenue needs infrastructure. Without it, strong products still stall at founder-dependent growth.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {painPoints.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="enterprise-card group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 text-brand-blue mb-4 group-hover:from-brand-cyan/30 group-hover:to-brand-blue/30 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-brand-blue/10">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display font-semibold text-charcoal mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
