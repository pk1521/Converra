import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ClassyAmbientLayer } from "@/components/visuals/ClassyAmbientLayer";
import { openBookConsultation } from "@/lib/links";
import {
  CONSTRUCTION_SUMMARY,
  REAL_ESTATE_SALE_GUARANTEE,
  REAL_ESTATE_SCHEDULE_CTA,
} from "@/lib/real-estate";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight, Calendar } from "lucide-react";

export function RealEstateCta() {
  return (
    <section id="re-cta" className="hero-luxury section-padding relative overflow-hidden">
      <ClassyAmbientLayer variant="dark" />

      <div className="container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-ivory mb-4 leading-tight">
            Sell Property or Start Your Build
          </h2>
          <p className="text-lg text-luxury-cream/75 mb-4 max-w-xl mx-auto font-light">
            Real estate sales, construction consultancy, renovation, and project execution under one Converra team.
          </p>
          <p className="text-sm text-brand-cyan/90 mb-2 max-w-lg mx-auto">{REAL_ESTATE_SALE_GUARANTEE}</p>
          <p className="text-sm text-slate-400 mb-10 max-w-lg mx-auto">{CONSTRUCTION_SUMMARY}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openBookConsultation}
              className="h-12 px-8 text-base rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold"
            >
              {REAL_ESTATE_SCHEDULE_CTA}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("book-a-call")}
              className="h-12 px-8 text-base rounded-full border-brand-teal/50 text-brand-cyan hover:bg-brand-teal/10"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
