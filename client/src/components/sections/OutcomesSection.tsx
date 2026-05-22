import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  Eye,
  Shield,
  Zap,
  Send,
  Settings,
  TrendingUp,
} from "lucide-react";

const metrics = [
  { icon: Eye, value: 100, suffix: "%", label: "Pipeline visibility", desc: "Full-funnel transparency across every stage" },
  { icon: Shield, value: 40, suffix: "%", prefix: "↓", label: "Lead leakage reduction", desc: "Illustrative benchmark from system implementation" },
  { icon: Zap, value: 2, suffix: "x", label: "Faster follow-ups", desc: "Automated sequences vs. manual outreach" },
];

const outcomes = [
  { icon: Send, title: "Scalable outbound systems", desc: "Prospecting runs on process, not founder energy." },
  { icon: Settings, title: "Operational efficiency", desc: "Fewer tools, clearer workflows, less manual overhead." },
  { icon: TrendingUp, title: "Predictable revenue growth", desc: "Forecastable pipeline backed by system discipline." },
];

export function OutcomesSection() {
  return (
    <Section id="outcomes" variant="dark" className="!bg-charcoal">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Measurable Business Outcomes
        </h2>
        <p className="text-lg text-slate-400">
          Systems create compounding returns. Here&apos;s what structured execution delivers.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3 mb-16 max-w-5xl mx-auto">
        {metrics.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="metric-card-dark text-center"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/20 text-brand-blue mb-4 mx-auto">
              <stat.icon className="h-5 w-5" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white tabular-nums font-display">
              {stat.prefix}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
            </div>
            <p className="text-white font-medium mt-2">{stat.label}</p>
            <p className="text-slate-500 text-xs mt-1">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
        {outcomes.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-violet/20 text-brand-violet mb-4">
              <card.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
