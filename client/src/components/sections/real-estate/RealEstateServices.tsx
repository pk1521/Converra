import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ClassyAmbientLayer } from "@/components/visuals/ClassyAmbientLayer";
import {
  Home,
  Building2,
  Map,
  Hammer,
  HardHat,
  ClipboardList,
  FileCheck,
  Handshake,
} from "lucide-react";

const realEstateServices = [
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
];

const constructionServices = [
  {
    icon: HardHat,
    phase: "04",
    title: "Civil Engineering Consultancy",
    items: [
      "Site assessment & feasibility",
      "Structural guidance",
      "Material & cost planning",
      "Regulatory compliance support",
    ],
  },
  {
    icon: Hammer,
    phase: "05",
    title: "Renovation & Construction",
    items: [
      "Residential renovation",
      "Commercial fit-outs",
      "Office & retail upgrades",
      "Space modernization",
    ],
  },
  {
    icon: ClipboardList,
    phase: "06",
    title: "Project Execution",
    items: [
      "End-to-end site coordination",
      "Vendor & contractor management",
      "On-site quality supervision",
      "Timeline & milestone tracking",
    ],
  },
  {
    icon: FileCheck,
    phase: "07",
    title: "Approvals & Handover",
    items: [
      "Title & layout approvals",
      "Agreement & registration support",
      "Final inspection & snag lists",
      "Ready-to-use handover",
    ],
  },
  {
    icon: Handshake,
    phase: "08",
    title: "Closing & Coordination",
    items: [
      "Buyer-seller negotiation",
      "Construction-to-sale alignment",
      "Documentation for both tracks",
      "Single point of contact",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof realEstateServices)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -2 }}
      className="construction-card p-6 pl-7"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal border border-brand-teal/20">
          <service.icon className="h-5 w-5" />
        </div>
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
  );
}

export function RealEstateServices() {
  return (
    <Section id="re-services" variant="dark" theme="classy" className="luxury-section-dark relative">
      <ClassyAmbientLayer variant="dark" />

      <div className="relative max-w-3xl mx-auto text-center mb-14">
        <span className="luxury-badge mb-4">Our Services</span>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-luxury-ivory mb-4 mt-4">
          Real Estate & Construction Services
        </h2>
        <p className="text-lg text-luxury-cream/70 font-light">
          Sell property fast, build with confidence, and manage construction from planning through handover.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto mb-10">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan mb-6 text-center">
          Real estate
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {realEstateServices.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan mb-6 text-center">
          Construction & consultancy
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {constructionServices.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i + 3} />
          ))}
        </div>
      </div>
    </Section>
  );
}
