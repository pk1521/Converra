import { RealtySectionHeader } from "@/components/realty-partners/RealtySectionHeader";
import { REALTY_COMPARISON } from "@/lib/realty-partners";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function RealtyPartnersAdvantage() {
  return (
    <section id="rp-advantage" className="realty-section-dark section-padding scroll-mt-28">
      <div className="container-padding">
        <RealtySectionHeader
          eyebrow="Advantage"
          title="Beyond Traditional Real Estate"
          description="We are positioned as your Real Estate Growth Partner, not a transaction broker."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-realty-gold/20 realty-glass"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 bg-white/5">
              <h3 className="font-display text-lg font-bold text-slate-400 mb-6 uppercase tracking-wider">
                Traditional Broker
              </h3>
              <ul className="space-y-4">
                {REALTY_COMPARISON.traditional.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-400 text-sm">
                    <X className="h-4 w-4 text-slate-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-br from-realty-gold/10 to-transparent">
              <h3 className="font-display text-lg font-bold text-realty-gold-light mb-6 uppercase tracking-wider">
                Converra Realty Partners
              </h3>
              <ul className="space-y-4">
                {REALTY_COMPARISON.converra.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200 text-sm">
                    <Check className="h-4 w-4 text-realty-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
