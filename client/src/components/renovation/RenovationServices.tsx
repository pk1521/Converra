import { RenovationSectionHeader } from "@/components/renovation/RenovationSectionHeader";
import { RENOVATION_SERVICE_GROUPS } from "@/lib/renovation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function RenovationServices() {
  return (
    <section id="reno-services" className="reno-section-dark section-padding scroll-mt-28">
      <div className="container-padding">
        <RenovationSectionHeader eyebrow="Services" title="Our Renovation Services" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {RENOVATION_SERVICE_GROUPS.map((g, i) => (
            <motion.article key={g.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="reno-glass p-8 h-full flex flex-col">
              <div className="h-1 w-12 rounded-full bg-reno-gold mb-4" />
              <h3 className="font-display text-xl font-bold text-white mb-3">{g.title}</h3>
              {"description" in g && g.description && <p className="text-slate-400 text-sm mb-4 flex-1">{g.description}</p>}
              {g.items.length > 0 && (
                <ul className="space-y-2 mt-auto">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-300">
                      <Check className="h-4 w-4 text-reno-gold shrink-0 mt-0.5" />
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
