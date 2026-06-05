import { RealtySectionHeader } from "@/components/realty-partners/RealtySectionHeader";
import { REALTY_POSITIONING } from "@/lib/realty-partners";
import { motion } from "framer-motion";
import { BarChart3, Users, Megaphone } from "lucide-react";

const pillars = [
  {
    icon: Megaphone,
    title: "Visibility & demand",
    text: "Branding, campaigns, and channels that put your project in front of qualified buyers.",
  },
  {
    icon: Users,
    title: "Sales systems",
    text: "Funnels, follow-up, site visits, and closure workflows your team can run daily.",
  },
  {
    icon: BarChart3,
    title: "Measurable growth",
    text: "Reporting and optimization so every rupee of marketing ties back to inventory movement.",
  },
];

export function RealtyPartnersAbout() {
  return (
    <section id="rp-about" className="realty-section-light section-padding scroll-mt-28 relative overflow-hidden">
      <div className="absolute inset-0 texture-blueprint opacity-[0.15] pointer-events-none" />
      <div className="container-padding relative z-10">
        <RealtySectionHeader
          eyebrow="About"
          title="We Are Not Brokers. We Are Your Realty Growth Partners."
          description="Most developers know how to acquire land and build projects. The challenge begins when it comes to branding, lead generation, customer acquisition and inventory movement. Partner with Converra as your external growth department — we help projects attract qualified buyers, improve visibility and accelerate sales through proven growth strategies."
          light
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {REALTY_POSITIONING.map((label) => (
            <span
              key={label}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-realty-navy/5 text-realty-navy border border-realty-gold/25"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="realty-glass-light p-8"
            >
              <div className="h-12 w-12 rounded-xl bg-realty-navy flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-realty-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-realty-navy mb-3">{title}</h3>
              <p className="text-realty-grey text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
