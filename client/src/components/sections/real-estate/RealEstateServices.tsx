import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import {
  Hammer,
  HardHat,
  LayoutGrid,
  Building2,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Renovation Solutions",
    items: [
      "Residential renovation",
      "Commercial renovation",
      "Office upgrades",
      "Café & retail transformations",
      "Space modernization",
    ],
  },
  {
    icon: HardHat,
    title: "Civil Engineering Consultancy",
    items: [
      "Project planning",
      "Site consultation",
      "Structural guidance",
      "Material planning",
      "Execution supervision",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Interior & Space Transformation",
    items: [
      "Modern interiors",
      "Lighting & ceiling concepts",
      "Functional layout planning",
      "Space optimization",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate Support",
    items: [
      "Property selling assistance",
      "Property consultation",
      "Buyer & seller coordination",
      "Investment guidance",
      "Site evaluation support",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Execution Management",
    items: [
      "Vendor coordination",
      "Timeline management",
      "On-site execution",
      "Quality supervision",
      "End-to-end project handling",
    ],
  },
];

export function RealEstateServices() {
  return (
    <Section id="re-services" variant="dark" className="!bg-charcoal">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-brand-cyan text-sm font-medium tracking-wide uppercase mb-3">
          Services
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Structured Solutions For Every Space
        </h2>
        <p className="text-lg text-slate-400">
          From consultancy to complete execution — engineered for clarity, quality, and modern outcomes.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -2 }}
            className={`glass-card p-6 hover:border-brand-blue/30 transition-all duration-300 ${
              i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <motion.div
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue mb-5"
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="h-5 w-5" />
            </motion.div>
            <h3 className="font-display font-semibold text-white mb-4">{service.title}</h3>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="text-sm text-slate-400 flex gap-2">
                  <span className="text-brand-cyan mt-1.5 h-1 w-1 rounded-full bg-brand-cyan shrink-0" />
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
