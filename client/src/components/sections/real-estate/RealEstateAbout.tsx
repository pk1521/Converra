import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ClassyAmbientLayer } from "@/components/visuals/ClassyAmbientLayer";
import { CONSTRUCTION_SUMMARY, CONSULTANCY_SUMMARY, REAL_ESTATE_SALE_GUARANTEE } from "@/lib/real-estate";
import { CheckCircle2, HardHat, MapPin, Users, Hammer } from "lucide-react";

const realEstateItems = [
  "Residential plots & homes",
  "Commercial property sales",
  "Acre plots & land parcels",
  "Buyer matching & fast closing",
  "Investment property advisory",
];

const constructionItems = [
  "A-Z construction consultancy",
  "Residential & commercial renovation",
  "Civil engineering guidance",
  "New build & fit-out execution",
  "Site supervision & vendor coordination",
  "Structural planning & material selection",
  "Timeline & quality management",
];

const credentials = [
  { icon: MapPin, label: "Real estate + construction" },
  { icon: HardHat, label: "Engineering-led delivery" },
  { icon: Users, label: "Dedicated site teams" },
];

export function RealEstateAbout() {
  return (
    <Section id="re-about" variant="light" theme="classy" className="luxury-section-light">
      <ClassyAmbientLayer variant="light" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <div className="max-w-3xl mb-12">
          <span className="luxury-badge mb-4">Consultancy & Real Estate</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-luxury-stone mb-6 mt-4">
            Property Sales & Construction, One Team
          </h2>
          <p className="text-lg text-luxury-stone/70 leading-relaxed mb-4 font-light">
            Converra combines fast real estate sales with full construction support. Whether you are selling land, buying property, or building and renovating, we handle approvals, execution, and delivery under one structured process.
          </p>
          <p className="text-base text-luxury-stone/80 leading-relaxed mb-4">{REAL_ESTATE_SALE_GUARANTEE}</p>
          <p className="text-base text-luxury-stone/80 leading-relaxed mb-6">{CONSTRUCTION_SUMMARY}</p>
          <p className="text-sm text-luxury-stone/70 leading-relaxed">{CONSULTANCY_SUMMARY}</p>

          <div className="flex flex-wrap gap-3 mt-8">
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

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="luxury-card p-8 md:p-10"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-teal/20">
              <MapPin className="h-5 w-5 text-brand-teal" />
              <h3 className="font-serif font-medium text-luxury-stone text-lg">Real estate</h3>
            </div>
            <ul className="space-y-4">
              {realEstateItems.map((item, i) => (
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

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="luxury-card p-8 md:p-10"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-teal/20">
              <Hammer className="h-5 w-5 text-brand-teal" />
              <h3 className="font-serif font-medium text-luxury-stone text-lg">Construction & consultancy</h3>
            </div>
            <ul className="space-y-4">
              {constructionItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
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
        </div>
      </motion.div>
    </Section>
  );
}
