import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openBookRenovationVisit } from "@/lib/links";
import { RENOVATION_SPECIAL_PROGRAM } from "@/lib/renovation";
import { ArrowRight } from "lucide-react";

export function RenovationSpecial() {
  return (
    <section className="reno-section-dark section-padding">
      <div className="container-padding max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="reno-glass p-10 md:p-12 border-reno-gold/20">
          <span className="reno-badge mb-4">Special Program</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{RENOVATION_SPECIAL_PROGRAM.title}</h2>
          <p className="text-slate-300 leading-relaxed mb-8">{RENOVATION_SPECIAL_PROGRAM.description}</p>
          <Button onClick={openBookRenovationVisit} className="rounded-full bg-reno-gold text-reno-navy font-bold h-12 px-8">
            {RENOVATION_SPECIAL_PROGRAM.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
