import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ClassyAmbientLayer } from "@/components/visuals/ClassyAmbientLayer";
import { Home, Building2, Map, FileCheck, Handshake } from "lucide-react";

const services = [
  {
    icon: Home,
    phase: "01",
    title: "Residential Sales",
    items: [
      "Plots & independent homes",
      "Apartments & villas",
      "Ready-to-move listings",
      "Buyer screening & visits",
    ],
  },
  {
    icon: Building2,
    phase: "02",
    title: "Commercial Property",
    items: [
      "Office & retail spaces",
      "Industrial & warehouse sites",
      "Lease or outright sale",
      "Investor introductions",
    ],
  },
  {
    icon: Map,
    phase: "03",
    title: "Land & Acre Plots",
    items: [
      "Acre parcels & farmland",
      "Layout & township plots",
      "3-month sale positioning",
      "Approval-ready documentation",
    ],
  },
  {
    icon: FileCheck,
    phase: "04",
    title: "Approvals & Compliance",
    items: [
      "Title & encumbrance checks",
      "Layout & conversion support",
      "Regulatory clearance guidance",
      "Sale-ready paperwork",
    ],
  },
  {
    icon: Handshake,
    phase: "05",
    title: "Closing & Handover",
    items: [
      "Buyer negotiation support",
      "Agreement coordination",
      "Registration assistance",
      "Fast-track deal closure",
    ],
  },
];

export function RealEstateServices() {
  return (
    <Section id="re-services" variant="dark" theme="classy" className="luxury-section-dark relative">
      <ClassyAmbientLayer variant="dark" />

      <div className="relative max-w-3xl mx-auto text-center mb-14">
        <span className="luxury-badge mb-4">Our Services</span>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-luxury-ivory mb-4 mt-4">
          End-to-End Real Estate Sales
        </h2>
        <p className="text-lg text-luxury-cream/70 font-light">
          From listing to registration, every step is built to attract serious buyers and close quickly.
        </p>
      </div>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -2 }}
            className={`construction-card p-6 pl-7 ${
              i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="flex items-start justify-between mb-5">
              <motion.div
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal border border-brand-teal/20"
                whileHover={{ scale: 1.05 }}
              >
                <service.icon className="h-5 w-5" />
              </motion.div>
              <span className="font-mono text-xs text-construction-concrete/60">{service.phase}</span>
            </div>
            <h3 className="font-display font-semibold text-white mb-4">{service.title}</h3>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="text-sm text-slate-400 flex gap-2">
                  <span className="mt-2 h-0.5 w-3 bg-brand-teal/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
