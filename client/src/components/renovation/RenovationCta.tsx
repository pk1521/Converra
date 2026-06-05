import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageTexture } from "@/components/ui/PageTexture";
import { openBookRenovationVisit, openBookRenovationEstimate } from "@/lib/links";
import { RENOVATION_PRIMARY_CTA, RENOVATION_SECONDARY_CTA } from "@/lib/renovation";
import { ArrowRight } from "lucide-react";

export function RenovationCta() {
  return (
    <section className="reno-section-dark section-padding relative overflow-hidden">
      <PageTexture variant="construction" opacity={0.35} />
      <div className="container-padding relative z-10 max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs uppercase tracking-label text-reno-gold/80 mb-4">Start with a conversation</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-display">
            Your space has more potential than it shows today.
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-copy max-w-xl mx-auto">
            Whether it&apos;s a single room or a full property refresh, we walk the site first, then quote
            with clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openBookRenovationVisit}
              className="h-12 px-8 rounded-full bg-reno-gold text-reno-navy font-bold shadow-lg shadow-reno-gold/20"
            >
              {RENOVATION_PRIMARY_CTA}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={openBookRenovationEstimate}
              className="h-12 px-8 rounded-full border-reno-gold/40 text-reno-gold-light hover:bg-reno-gold/10"
            >
              {RENOVATION_SECONDARY_CTA}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
