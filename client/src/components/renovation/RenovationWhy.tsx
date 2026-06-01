import { RenovationSectionHeader } from "@/components/renovation/RenovationSectionHeader";
import { RENOVATION_WHY } from "@/lib/renovation";
import { motion } from "framer-motion";

export function RenovationWhy() {
  return (
    <section id="reno-why" className="reno-section-dark section-padding scroll-mt-28">
      <div className="container-padding">
        <RenovationSectionHeader eyebrow="Trust" title="Why Clients Trust Converra" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {RENOVATION_WHY.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="reno-glass p-6">
              <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
