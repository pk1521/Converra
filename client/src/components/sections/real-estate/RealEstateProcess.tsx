import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ClassyAmbientLayer } from "@/components/visuals/ClassyAmbientLayer";
import {
  ClipboardList,
  FileCheck,
  Megaphone,
  Handshake,
  KeyRound,
  MapPin,
  HardHat,
  CheckCircle2,
} from "lucide-react";

const realEstateSteps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Property Review",
    desc: "Location, title, approvals, and realistic sale timeline.",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Documentation",
    desc: "Paperwork aligned so buyers can move without delays.",
  },
  {
    step: "03",
    icon: Megaphone,
    title: "Buyer Outreach",
    desc: "Targeted marketing, showings, and qualified introductions.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Negotiation",
    desc: "Offer management and agreement coordination.",
  },
  {
    step: "05",
    icon: KeyRound,
    title: "Registration",
    desc: "Final registration support and handover.",
  },
];

const constructionSteps = [
  {
    step: "01",
    icon: MapPin,
    title: "Site Evaluation",
    desc: "On-site assessment, scope definition, and feasibility.",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Planning & Approvals",
    desc: "Drawings, structural review, permits, and compliance.",
  },
  {
    step: "03",
    icon: HardHat,
    title: "Execution Strategy",
    desc: "Phased build plan, vendors, materials, and timeline.",
  },
  {
    step: "04",
    icon: ClipboardList,
    title: "On-Site Supervision",
    desc: "Daily coordination, quality checks, and progress tracking.",
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Delivery & Handover",
    desc: "Final inspection, snag closure, and ready-to-use spaces.",
  },
];

function ProcessTrack({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle: string;
  steps: typeof realEstateSteps;
}) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-construction-concrete">{subtitle}</p>
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
              key={item.step + item.title}
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
              <h4 className="font-display font-semibold text-white text-sm mb-2 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
          <span className="site-tag mb-4">How We Work</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 mt-4">
            Two Tracks, One Team
          </h2>
          <p className="text-lg text-construction-concrete">
            Structured processes for property sales and construction projects, from first consultation to final handover.
          </p>
        </div>

        <ProcessTrack
          title="Real estate sales"
          subtitle="From listing to registration, built to close fast."
          steps={realEstateSteps}
        />
        <ProcessTrack
          title="Construction & consultancy"
          subtitle="A-Z support from site evaluation through delivery."
          steps={constructionSteps}
        />
      </motion.div>
    </Section>
  );
}
