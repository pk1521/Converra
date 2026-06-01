import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openBookRenovationEstimate, openBookRenovationVisit } from "@/lib/links";
import { RENOVATION_PRIMARY_CTA, RENOVATION_SECONDARY_CTA } from "@/lib/renovation";
import { ArrowRight } from "lucide-react";

export function RenovationCta() {
  return (
    <section className="reno-section-dark section-padding">
      <div className="container-padding max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Transform Your Property</h2>
          <p className="text-slate-400 text-lg mb-10">
            Whether it&apos;s a small upgrade or a complete makeover, Converra Renovation Solutions helps unlock the true value of your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openBookRenovationVisit} className="h-12 px-8 rounded-full bg-reno-gold text-reno-navy font-bold">
              {RENOVATION_PRIMARY_CTA}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={openBookRenovationEstimate} className="h-12 px-8 rounded-full border-reno-gold/50 text-reno-gold-light hover:bg-reno-gold/10">
              {RENOVATION_SECONDARY_CTA}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
