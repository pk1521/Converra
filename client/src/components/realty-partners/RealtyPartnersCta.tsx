import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageTexture } from "@/components/ui/PageTexture";
import { openBookRealtyConsultation } from "@/lib/links";
import { REALTY_PRIMARY_CTA } from "@/lib/realty-partners";
import { ArrowRight } from "lucide-react";

export function RealtyPartnersCta() {
  return (
    <section className="realty-section-dark section-padding relative overflow-hidden">
      <PageTexture variant="blueprint" opacity={0.35} />
      <div className="absolute inset-0 bg-gradient-to-b from-realty-gold/[0.04] via-transparent to-realty-gold/[0.04] pointer-events-none" />
      <div className="container-padding relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-label text-realty-gold/80 mb-4">Ready when your inventory is</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-display">
            Launching, stuck, or scaling — let&apos;s talk units sold.
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-copy">
            A 30-minute consultation to review your project, pipeline, and what a growth partnership would
            look like in practice.
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
