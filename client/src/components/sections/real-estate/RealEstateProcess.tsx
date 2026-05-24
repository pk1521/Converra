import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ClassyAmbientLayer } from "@/components/visuals/ClassyAmbientLayer";
import {
  ClipboardList,
  FileCheck,
  Megaphone,
  Handshake,
  KeyRound,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Property Review",
    desc: "We assess location, title, approvals, and realistic sale timeline.",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Documentation & Approvals",
    desc: "Paperwork and compliance are aligned so buyers can move without delays.",
  },
  {
    step: "03",
    icon: Megaphone,
    title: "Market & Buyer Outreach",
    desc: "Targeted positioning, showings, and qualified buyer introductions.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Negotiation & Agreement",
    desc: "Offer management, terms, and agreement coordination through close.",
  },
  {
    step: "05",
    icon: KeyRound,
    title: "Registration & Handover",
    desc: "Final registration support and handover once the deal is complete.",
  },
];

export function RealEstateProcess() {
  return (
    <Section id="re-process" variant="charcoal" theme="classy" className="luxury-section-dark relative">
      <ClassyAmbientLayer variant="dark" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="site-tag mb-4">How We Sell</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 mt-4">
            From Listing to Sold
          </h2>
          <p className="text-lg text-construction-concrete">
            A clear five-step path designed to move property quickly, including acre plots within a 3-month window when approvals are in place.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-1 bg-construction-steel/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-teal via-brand-blue to-brand-teal"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>

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
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-brand-teal/40 bg-charcoal-800 text-brand-teal font-display font-bold text-xs shadow-lg shadow-brand-teal/10">
                    {item.step}
                  </div>
                </div>
                <div className="flex justify-center mb-3">
                  <div className="rounded-md bg-construction-steel/10 p-2 border border-construction-steel/20">
                    <item.icon className="h-5 w-5 text-brand-blue" />
                  </div>
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
