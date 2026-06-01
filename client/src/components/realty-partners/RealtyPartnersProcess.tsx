import { RealtySectionHeader } from "@/components/realty-partners/RealtySectionHeader";
import { REALTY_PROCESS } from "@/lib/realty-partners";
import { motion } from "framer-motion";

export function RealtyPartnersProcess() {
  return (
    <section id="rp-process" className="realty-section-dark section-padding scroll-mt-28">
      <div className="container-padding">
        <RealtySectionHeader
          eyebrow="Framework"
          title="Our Growth Framework"
          description="A structured path from assessment to optimization, built for developers who need velocity, not one-off deals."
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-realty-gold/50 via-realty-gold/20 to-transparent md:-translate-x-px" />

          {REALTY_PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:items-center`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div
                className={`flex-1 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                } pl-16 md:pl-0`}
              >
                <div className="realty-glass p-6 md:p-8">
                  <span className="text-realty-gold font-display font-bold text-sm uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-2 mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-realty-gold border-4 border-realty-navy -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 shadow-lg shadow-realty-gold/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
