import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Professional coordination, modern execution, and timely delivery. The transformation exceeded expectations.",
    name: "Commercial Property Owner",
    role: "Retail Space Renovation",
  },
  {
    quote:
      "Structured planning from day one. The engineering-led approach gave us confidence throughout the project.",
    name: "Residential Client",
    role: "Home Modernization",
  },
  {
    quote:
      "Clear communication, disciplined timelines, and quality supervision. Exactly what we needed for our office upgrade.",
    name: "Business Operations Lead",
    role: "Corporate Office Project",
  },
  {
    quote:
      "From site evaluation to final handover, the team maintained professional standards at every stage.",
    name: "Property Investor",
    role: "Real Estate Advisory",
  },
];

export function RealEstateTestimonials() {
  return (
    <Section id="re-testimonials" variant="dark" className="!bg-charcoal-800">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Client Perspectives
        </h2>
        <p className="text-lg text-slate-400">
          Execution-focused feedback from renovation and advisory engagements.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-8"
          >
            <Quote className="h-8 w-8 text-brand-blue/40 mb-4" />
            <p className="text-slate-200 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              <p className="font-semibold text-white text-sm">{t.name}</p>
              <p className="text-xs text-slate-500 mt-1">{t.role}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
