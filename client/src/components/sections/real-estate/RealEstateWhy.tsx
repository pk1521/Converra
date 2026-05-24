import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import {
  Zap,
  FileCheck,
  Users,
  MessageSquare,
  Clock,
  Shield,
  HardHat,
  Hammer,
} from "lucide-react";
import { CONSTRUCTION_SUMMARY, REAL_ESTATE_SALE_GUARANTEE } from "@/lib/real-estate";

const reasons = [
  { icon: Zap, title: "Fast-sale real estate positioning" },
  { icon: Clock, title: "3-month target on acre plots" },
  { icon: HardHat, title: "Engineering-led construction" },
  { icon: Hammer, title: "A-Z renovation & build support" },
  { icon: FileCheck, title: "Approvals & documentation first" },
  { icon: Users, title: "Qualified buyers & site teams" },
  { icon: MessageSquare, title: "Transparent project updates" },
  { icon: Shield, title: "Quality supervision on-site" },
];

export function RealEstateWhy() {
  return (
    <Section id="re-why" variant="light" theme="classy" className="luxury-section-light">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="luxury-badge mb-4">Why Choose Us</span>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-luxury-stone mb-4 mt-4">
          Why Converra
        </h2>
        <p className="text-lg text-luxury-stone/70 font-light mb-4">
          One partner for selling property and delivering construction. No handoffs, no gaps.
        </p>
        <p className="text-base text-luxury-stone/80 max-w-2xl mx-auto leading-relaxed mb-2">
          {REAL_ESTATE_SALE_GUARANTEE}
        </p>
        <p className="text-base text-luxury-stone/80 max-w-2xl mx-auto leading-relaxed">
          {CONSTRUCTION_SUMMARY}
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
            className="construction-card-light p-6 text-center group"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-construction-blueprint/5 border border-construction-blueprint/10 text-construction-blueprint mx-auto mb-4 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/30 group-hover:text-brand-teal transition-colors">
              <item.icon className="h-5 w-5" />
            </div>
            <p className="font-medium text-charcoal text-sm leading-snug">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
