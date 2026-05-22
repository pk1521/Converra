import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import {
  Target,
  Database,
  Send,
  Workflow,
  GitMerge,
  BarChart3,
  Users,
  Kanban,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "GTM Strategy",
    outcome: "A unified go-to-market blueprint aligned to your ICP and revenue targets.",
  },
  {
    icon: Database,
    title: "CRM Optimization",
    outcome: "CRM structures that teams actually use — clean data, clear stages, full visibility.",
  },
  {
    icon: Send,
    title: "Outbound Systems",
    outcome: "Repeatable prospecting workflows that generate pipeline without founder involvement.",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    outcome: "Follow-ups, task routing, and notifications that run while your team sells.",
  },
  {
    icon: GitMerge,
    title: "Sales Process Architecture",
    outcome: "Documented stages, playbooks, and handoffs from first touch to closed-won.",
  },
  {
    icon: BarChart3,
    title: "Revenue Operations",
    outcome: "End-to-end RevOps alignment across tools, teams, and reporting layers.",
  },
  {
    icon: Users,
    title: "Affiliate Growth Systems",
    outcome: "Partner and referral channels structured for scalable, trackable revenue.",
  },
  {
    icon: Kanban,
    title: "Pipeline Management",
    outcome: "Real-time pipeline health with leakage detection and forecast discipline.",
  },
];

export function WhatWeSolveSection() {
  return (
    <Section id="what-we-solve" variant="dark" className="!bg-charcoal">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-brand-cyan text-sm font-medium tracking-wide mb-3 uppercase">
          What we solve
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Your Revenue Systems Partner
        </h2>
        <p className="text-lg text-slate-400">
          We don&apos;t sell activities. We build outcomes — structured systems that make growth predictable.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {services.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -2 }}
            className="glass-card p-6 hover:border-brand-blue/30 transition-all duration-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue mb-4">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.outcome}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
