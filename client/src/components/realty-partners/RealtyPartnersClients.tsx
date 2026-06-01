import { RealtySectionHeader } from "@/components/realty-partners/RealtySectionHeader";
import { REALTY_CLIENTS } from "@/lib/realty-partners";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Map,
  Castle,
  LandPlot,
  LineChart,
  Globe,
} from "lucide-react";

const clientIcons = [Building2, Home, Map, Castle, LandPlot, LineChart, Globe];

export function RealtyPartnersClients() {
  return (
    <section id="rp-clients" className="realty-section-light section-padding scroll-mt-28">
      <div className="container-padding">
        <RealtySectionHeader eyebrow="Clients" title="Who We Work With" light />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {REALTY_CLIENTS.map((client, i) => {
            const Icon = clientIcons[i] ?? Building2;
            return (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="realty-glass-light p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="h-11 w-11 rounded-xl bg-realty-navy/5 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-realty-gold" />
                </div>
                <span className="font-display font-semibold text-realty-navy text-sm">{client}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
