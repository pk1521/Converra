import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ClassyAmbientLayer } from "@/components/visuals/ClassyAmbientLayer";
import { REAL_ESTATE_SALE_GUARANTEE } from "@/lib/real-estate";
import { CheckCircle2, MapPin, Users, FileCheck } from "lucide-react";

const specialties = [
  "Residential plots & homes",
  "Commercial property sales",
  "Acre plots & land parcels",
  "Approval & documentation support",
  "Buyer matching & outreach",
  "Investment property advisory",
  "Fast-track closing coordination",
];

const credentials = [
  { icon: MapPin, label: "Local market expertise" },
  { icon: Users, label: "Active buyer network" },
  { icon: FileCheck, label: "Approval-first approach" },
];

export function RealEstateAbout() {
  return (
    <Section id="re-about" variant="light" theme="classy" className="luxury-section-light">
      <ClassyAmbientLayer variant="light" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <div>
          <span className="luxury-badge mb-4">Real Estate Specialists</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-luxury-stone mb-6 mt-4">
            Built to Move Property Fast
          </h2>
          <p className="text-lg text-luxury-stone/70 leading-relaxed mb-6 font-light">
            Converra Real Estate is focused on one outcome: getting your property sold. We combine market positioning, qualified buyer outreach, and structured closing support so listings do not sit idle.
          </p>
          <p className="text-lg text-luxury-stone font-normal leading-relaxed mb-8">
            {REAL_ESTATE_SALE_GUARANTEE}
          </p>

          <div className="flex flex-wrap gap-3">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 rounded-full border border-brand-teal/25 bg-luxury-ivory/80 px-4 py-2 text-sm text-luxury-stone"
              >
                <c.icon className="h-4 w-4 text-brand-teal" />
                {c.label}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="luxury-card p-8 md:p-10"
        >
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-teal/20">
            <MapPin className="h-5 w-5 text-brand-teal" />
            <h3 className="font-serif font-medium text-luxury-stone text-lg">What we sell</h3>
          </div>
          <ul className="space-y-4">
            {specialties.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 text-luxury-stone/80"
              >
                <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  );
}
