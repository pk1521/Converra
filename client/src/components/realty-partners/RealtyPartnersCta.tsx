import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openBookRealtyConsultation } from "@/lib/links";
import { REALTY_PRIMARY_CTA } from "@/lib/realty-partners";
import { ArrowRight } from "lucide-react";

export function RealtyPartnersCta() {
  return (
    <section className="realty-section-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-realty-gold/5 via-transparent to-realty-gold/5 pointer-events-none" />
      <div className="container-padding relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s Accelerate Your Project Growth
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Whether you are launching a new project, clearing inventory or scaling sales, Converra
            Realty Partners can help.
          </p>
          <Button
            onClick={openBookRealtyConsultation}
            className="h-14 px-10 text-lg font-bold rounded-full bg-gradient-to-r from-realty-gold to-realty-gold-muted hover:from-realty-gold-light hover:to-realty-gold text-realty-navy shadow-lg shadow-realty-gold/25"
          >
            {REALTY_PRIMARY_CTA}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
