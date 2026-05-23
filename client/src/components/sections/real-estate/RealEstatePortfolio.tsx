import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const portfolioItems = [
  { category: "Residential", title: "Modern Home Renovation", tag: "Before & After" },
  { category: "Commercial", title: "Retail Space Upgrade", tag: "Commercial" },
  { category: "Interior", title: "Living Room Transformation", tag: "Modern Room" },
  { category: "Office", title: "Corporate Office Modernization", tag: "Office Upgrade" },
  { category: "Hospitality", title: "Café Interior Setup", tag: "Café Setup" },
  { category: "Lighting", title: "Ambient Lighting Redesign", tag: "Lighting" },
];

function PortfolioCard({ item, index }: { item: (typeof portfolioItems)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-charcoal-700/10 bg-charcoal-800 shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.1) 50%, rgba(34,211,238,0.08) 100%)`,
        }}
      />
      {/* Abstract interior lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden>
        <rect x="20%" y="30%" width="60%" height="40%" fill="none" stroke="white" strokeWidth="1" />
        <line x1="20%" y1="70%" x2="80%" y2="70%" stroke="white" strokeWidth="0.5" />
        <rect x="35%" y="45%" width="15%" height="25%" fill="rgba(59,130,246,0.3)" />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-80" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block text-[10px] uppercase tracking-wider text-brand-cyan font-medium mb-2">
          {item.tag}
        </span>
        <p className="text-xs text-slate-400 mb-1">{item.category}</p>
        <h3 className="font-display font-semibold text-white text-sm group-hover:text-brand-cyan transition-colors">
          {item.title}
        </h3>
      </div>

      <motion.div
        className="absolute top-4 right-4 rounded-full bg-white/10 backdrop-blur px-2.5 py-1 text-[10px] text-white/70 uppercase tracking-wider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.div>
    </motion.div>
  );
}

export function RealEstatePortfolio() {
  return (
    <Section id="re-portfolio" variant="light">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-brand-violet text-sm font-medium tracking-wide uppercase mb-3">
          Portfolio
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Transformations In Progress
        </h2>
        <p className="text-lg text-muted-foreground">
          Selected project categories showcasing modern execution across residential and commercial spaces.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {portfolioItems.map((item, i) => (
          <PortfolioCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}
