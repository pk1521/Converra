import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ClassyAmbientLayer } from "@/components/visuals/ClassyAmbientLayer";
import { Quote, Home, HardHat } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our acre plot had been listed for over a year. Converra repositioned it with the right approvals narrative and we had serious buyers within weeks.",
    name: "Land Owner",
    role: "Acre Plot Sale",
    ref: "PROP-042",
    icon: Home,
  },
  {
    quote:
      "They managed our office renovation end to end: civil planning, vendor coordination, and quality checks on site. Delivery was on schedule.",
    name: "Commercial Client",
    role: "Office Fit-Out",
    ref: "BLD-018",
    icon: HardHat,
  },
  {
    quote:
      "Commercial space closed faster than we expected. Clear documentation and direct buyer introductions made the difference.",
    name: "Commercial Property Owner",
    role: "Retail Unit Sale",
    ref: "PROP-031",
    icon: Home,
  },
  {
    quote:
      "From site evaluation to final handover on our home renovation, the team kept communication clear and execution structured throughout.",
    name: "Residential Client",
    role: "Home Renovation",
    ref: "BLD-027",
    icon: HardHat,
  },
];

export function RealEstateTestimonials() {
  return (
    <Section id="re-testimonials" variant="dark" theme="classy" className="luxury-section-dark relative">
      <ClassyAmbientLayer variant="dark" />

      <div className="relative max-w-3xl mx-auto text-center mb-14">
        <span className="luxury-badge mb-4">Client Feedback</span>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-luxury-ivory mb-4 mt-4">
          Real Estate & Construction Results
        </h2>
        <p className="text-lg text-luxury-cream/70 font-light">
          Feedback from clients who sold property or delivered construction projects with Converra.
        </p>
      </div>

      <div className="relative grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.ref}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="construction-card p-8 pl-7"
          >
            <div className="flex items-center justify-between mb-4">
              <Quote className="h-7 w-7 text-brand-teal/60" />
              <span className="font-mono text-[10px] text-construction-concrete/50">{t.ref}</span>
            </div>
            <p className="text-slate-200 leading-relaxed mb-6 text-sm">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3 pt-4 border-t border-construction-steel/20">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-teal/10 border border-brand-teal/20">
                <t.icon className="h-4 w-4 text-brand-teal" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-xs text-construction-concrete mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
