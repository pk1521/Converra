import { RenovationSectionHeader } from "@/components/renovation/RenovationSectionHeader";
import { RENOVATION_CLIENTS } from "@/lib/renovation";
import { motion } from "framer-motion";

export function RenovationClients() {
  return (
    <section id="reno-clients" className="reno-section-light section-padding scroll-mt-28">
      <div className="container-padding">
        <RenovationSectionHeader eyebrow="Clients" title="Who We Serve" light />
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {RENOVATION_CLIENTS.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="px-5 py-3 rounded-full bg-white border border-slate-200 text-sm font-medium text-reno-charcoal shadow-sm"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
