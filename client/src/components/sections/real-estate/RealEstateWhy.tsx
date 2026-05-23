import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import {
  Compass,
  Layers,
  Users,
  MessageSquare,
  Clock,
  Award,
  Target,
  Sparkles,
} from "lucide-react";

const reasons = [
  { icon: Compass, title: "Engineering-driven approach" },
  { icon: Layers, title: "Structured execution systems" },
  { icon: Sparkles, title: "Modern renovation thinking" },
  { icon: Users, title: "Skilled execution teams" },
  { icon: Target, title: "Professional coordination" },
  { icon: MessageSquare, title: "Transparent communication" },
  { icon: Clock, title: "Focused on timelines & quality" },
  { icon: Award, title: "Experience-oriented transformations" },
];

export function RealEstateWhy() {
  return (
    <Section id="re-why" variant="light">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Why Converra
        </h2>
        <p className="text-lg text-muted-foreground">
          Trusted execution backed by engineering discipline and modern project standards.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
      >
        {reasons.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="enterprise-card p-6 text-center group"
          >
            <motion.div
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal/5 text-charcoal mx-auto mb-4 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="h-5 w-5" />
            </motion.div>
            <p className="font-medium text-charcoal text-sm leading-snug">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
