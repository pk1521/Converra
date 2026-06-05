import { RealtySectionHeader } from "@/components/realty-partners/RealtySectionHeader";
import { PageTexture } from "@/components/ui/PageTexture";
import { REALTY_SERVICES } from "@/lib/realty-partners";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function RealtyPartnersServices() {
  return (
    <section id="rp-services" className="realty-section-dark section-padding scroll-mt-28 relative overflow-hidden">
      <PageTexture variant="blueprint" opacity={0.4} />
      <div className="container-padding relative z-10">
        <RealtySectionHeader
          eyebrow="Services"
          title="What we actually run for you"
          description="End-to-end sales, marketing, and growth systems — scoped like an internal team, not a listing fee."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REALTY_SERVICES.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="realty-glass p-8 flex flex-col h-full group"
            >
              <span className="font-display text-4xl font-bold text-realty-gold/20 mb-3 tabular-nums leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-realty-gold to-realty-gold-light mb-5 group-hover:w-14 transition-all duration-500" />
              <h3 className="font-display text-xl font-bold text-white mb-4">{service.title}</h3>
              {"description" in service && service.description && (
                <p className="text-slate-400 text-sm leading-copy mb-4 flex-1">{service.description}</p>
              )}
              {service.items.length > 0 && (
                <ul className="space-y-2.5 mt-auto pt-4 border-t border-white/[0.06]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="h-4 w-4 text-realty-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
