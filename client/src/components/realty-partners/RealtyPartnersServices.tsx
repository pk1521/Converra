import { RealtySectionHeader } from "@/components/realty-partners/RealtySectionHeader";
import { REALTY_SERVICES } from "@/lib/realty-partners";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function RealtyPartnersServices() {
  return (
    <section id="rp-services" className="realty-section-dark section-padding scroll-mt-28">
      <div className="container-padding">
        <RealtySectionHeader
          eyebrow="Services"
          title="Our Growth Solutions"
          description="End-to-end sales, marketing and growth systems for developers and promoters. Never brokerage. Always partnership."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REALTY_SERVICES.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="realty-glass p-8 flex flex-col h-full"
            >
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-realty-gold to-realty-gold-light mb-5" />
              <h3 className="font-display text-xl font-bold text-white mb-4">{service.title}</h3>
              {"description" in service && service.description && (
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
              )}
              {service.items.length > 0 && (
                <ul className="space-y-2 mt-auto">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
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
