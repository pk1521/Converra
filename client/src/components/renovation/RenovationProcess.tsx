import { RenovationSectionHeader } from "@/components/renovation/RenovationSectionHeader";
import { RENOVATION_PROCESS } from "@/lib/renovation";
import { motion } from "framer-motion";

export function RenovationProcess() {
  return (
    <section id="reno-process" className="reno-section-light section-padding scroll-mt-28">
      <div className="container-padding">
        <RenovationSectionHeader eyebrow="Process" title="How We Work" light />
        <div className="max-w-3xl mx-auto space-y-0">
          {RENOVATION_PROCESS.map((step, i) => (
            <motion.div key={step.step} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-reno-charcoal text-reno-gold-light flex items-center justify-center font-bold text-sm shrink-0">
                  {step.step}
                </div>
                {i < RENOVATION_PROCESS.length - 1 && <div className="w-px flex-1 bg-reno-gold/30 mt-2" />}
              </div>
              <div className="reno-glass-light p-6 flex-1 mb-2">
                <h3 className="font-display font-bold text-reno-charcoal mb-1">{step.title}</h3>
                <p className="text-sm text-reno-grey">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
