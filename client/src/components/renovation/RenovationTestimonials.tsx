import { RenovationSectionHeader } from "@/components/renovation/RenovationSectionHeader";
import { RENOVATION_TESTIMONIALS } from "@/lib/renovation";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function RenovationTestimonials() {
  return (
    <section className="reno-section-light section-padding">
      <div className="container-padding">
        <RenovationSectionHeader eyebrow="Results" title="Client Stories" light />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {RENOVATION_TESTIMONIALS.map((t, i) => (
            <motion.blockquote key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="reno-glass-light p-8">
              <Quote className="h-7 w-7 text-reno-gold/50 mb-4" />
              <p className="text-sm text-reno-charcoal/90 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <p className="font-semibold text-reno-charcoal">{t.name}</p>
                <p className="text-xs text-reno-grey">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
