import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Cloud, Briefcase, Gem, Cpu, Rocket } from "lucide-react";

const industries = [
  {
    icon: Cloud,
    title: "SaaS Startups",
    desc: "Product-led companies scaling from founder sales to repeatable GTM infrastructure.",
  },
  {
    icon: Briefcase,
    title: "B2B Services",
    desc: "High-touch service businesses needing structured pipeline and outbound systems.",
  },
  {
    icon: Gem,
    title: "High-Ticket Businesses",
    desc: "Long-cycle deals requiring CRM discipline, nurture workflows, and forecast accuracy.",
  },
  {
    icon: Cpu,
    title: "Tech-Enabled Companies",
    desc: "Technology-forward firms building revenue ops alongside product development.",
  },
  {
    icon: Rocket,
    title: "Growth-Stage Startups",
    desc: "Teams ready to move beyond ad-hoc sales into systematized revenue engines.",
  },
];

export function IndustriesSection() {
  return (
    <Section id="industries" variant="dark" className="!bg-charcoal-800">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Built For Companies Ready To Systematize Growth
        </h2>
        <p className="text-lg text-slate-400">
          We work with focused segments — not everyone. If you&apos;re building revenue infrastructure, we&apos;re aligned.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {industries.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`glass-card p-6 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan mb-4">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
