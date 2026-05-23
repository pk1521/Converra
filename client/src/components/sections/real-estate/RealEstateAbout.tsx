import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

const specialties = [
  "Renovation consultancy",
  "Commercial upgrades",
  "Residential transformations",
  "Interior execution coordination",
  "Project planning",
  "Space modernization",
  "Real estate advisory & property support",
];

export function RealEstateAbout() {
  return (
    <Section id="re-about" variant="light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-violet text-sm font-medium tracking-wide uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Engineering-Led Execution
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Led by a civil engineering background and supported by a talented team of engineers, execution specialists, consultants, and project coordinators, Converra focuses on delivering structured renovation and real estate solutions with clarity, professionalism, and modern execution standards.
          </p>
          <p className="text-lg text-charcoal font-medium leading-relaxed">
            Our focus is not just construction — it is creating spaces that are functional, aesthetic, and future-ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="enterprise-card p-8"
        >
          <h3 className="font-display font-semibold text-charcoal mb-6">We specialize in</h3>
          <ul className="space-y-4">
            {specialties.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 text-charcoal-700"
              >
                <CheckCircle2 className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  );
}
