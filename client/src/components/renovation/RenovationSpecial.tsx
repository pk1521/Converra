import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageTexture } from "@/components/ui/PageTexture";
import { openBookRenovationVisit } from "@/lib/links";
import { RENOVATION_SPECIAL_PROGRAM } from "@/lib/renovation";
import { ArrowRight, Home } from "lucide-react";

export function RenovationSpecial() {
  return (
    <section className="reno-section-dark section-padding relative overflow-hidden">
      <PageTexture variant="construction" opacity={0.5} />
      <div className="container-padding relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel-reno p-10 md:p-12 text-center"
        >
          <span className="inline-flex items-center gap-2 reno-badge mb-5">
            <Home className="h-3.5 w-3.5" />
            Special Program
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-display">
            {RENOVATION_SPECIAL_PROGRAM.title}
          </h2>
          <p className="text-slate-300 leading-copy mb-8 max-w-lg mx-auto">
            {RENOVATION_SPECIAL_PROGRAM.description}
          </p>
          <Button
            onClick={openBookRenovationVisit}
            className="rounded-full bg-reno-gold text-reno-navy font-bold h-12 px-8 shadow-lg shadow-reno-gold/20"
          >
            {RENOVATION_SPECIAL_PROGRAM.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
