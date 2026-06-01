import { RealtySectionHeader } from "@/components/realty-partners/RealtySectionHeader";
import { REALTY_TESTIMONIALS } from "@/lib/realty-partners";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function RealtyPartnersTestimonials() {
  return (
    <section id="rp-testimonials" className="realty-section-light section-padding scroll-mt-28">
      <div className="container-padding">
        <RealtySectionHeader
          eyebrow="Results"
          title="What Partners Say"
          description="Placeholder testimonials. Replace with verified client stories as they become available."
          light
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REALTY_TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="realty-glass-light p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-realty-gold/40 mb-4" />
              <p className="text-realty-navy/90 text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <p className="font-display font-semibold text-realty-navy">{t.name}</p>
                <p className="text-xs text-realty-grey mt-1">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
