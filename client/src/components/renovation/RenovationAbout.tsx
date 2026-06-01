import { RenovationSectionHeader } from "@/components/renovation/RenovationSectionHeader";
import { RENOVATION_POSITIONING } from "@/lib/renovation";
import { motion } from "framer-motion";
import { Hammer, Ruler, Palette } from "lucide-react";

const pillars = [
  { icon: Ruler, title: "Engineering-led", text: "Civil engineering expertise guides structural and technical decisions." },
  { icon: Palette, title: "Design thinking", text: "Modern aesthetics balanced with everyday functionality." },
  { icon: Hammer, title: "Managed execution", text: "Single partner for planning, vendors, and on-site coordination." },
];

export function RenovationAbout() {
  return (
    <section id="reno-about" className="reno-section-light section-padding scroll-mt-28">
      <div className="container-padding">
        <RenovationSectionHeader
          eyebrow="About"
          title="Renovation Is More Than Repair"
          description="A well-planned renovation can significantly improve property value, functionality and aesthetics without the cost of constructing a new building. Converra Renovation Solutions combines engineering expertise, design thinking and project execution to transform old spaces into modern assets. Whether it is a home, office, villa, retail shop or investment property, we help maximize its potential."
          light
        />
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {RENOVATION_POSITIONING.map((label) => (
            <span key={label} className="text-xs font-medium px-3 py-1.5 rounded-full bg-reno-charcoal/5 border border-reno-gold/25 text-reno-charcoal">
              {label}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="reno-glass-light p-8">
              <p.icon className="h-8 w-8 text-reno-gold mb-4" />
              <h3 className="font-display font-bold text-lg text-reno-charcoal mb-2">{p.title}</h3>
              <p className="text-sm text-reno-grey leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
