import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openBookStrategyCall } from "@/lib/links";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight, Mail } from "lucide-react";

export function RealEstateCta() {
  return (
    <section id="re-cta" className="section-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-brand-violet/20 rounded-full blur-[100px]" />
      </div>

      <div className="container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Transform Your Space With Confidence
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            From renovation consultancy to complete project execution, Converra helps bring modern spaces to life through structured planning and reliable execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => openBookStrategyCall(() => scrollToSection("re-contact"))}
              className="h-12 px-8 text-base bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shadow-xl shadow-brand-blue/30"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("re-contact")}
              className="h-12 px-8 text-base btn-secondary-outline"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
