import { RealtySectionHeader } from "@/components/realty-partners/RealtySectionHeader";
import { REALTY_WHY } from "@/lib/realty-partners";
import { motion } from "framer-motion";

export function RealtyPartnersWhy() {
  return (
    <section id="rp-why" className="realty-section-light section-padding scroll-mt-28">
      <div className="container-padding">
        <RealtySectionHeader
          eyebrow="Why Converra"
          title="Why Developers Choose Converra"
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {REALTY_WHY.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="realty-glass-light p-8 text-center"
            >
              <p className="text-3xl font-display font-bold text-realty-gold mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-lg font-bold text-realty-navy mb-2">{item.title}</h3>
              <p className="text-sm text-realty-grey leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
