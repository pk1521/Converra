import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { FounderSystemDiagram } from "@/components/visuals/FounderSystemDiagram";

const points = [
  "Every deal requires founder involvement — creating a hard ceiling on growth.",
  "Operational dependency means the business can't run sales without you in the loop.",
  "Inconsistent execution across reps, channels, and follow-up sequences.",
  "No documented systems — knowledge lives in one person's head.",
  "Burnout from manually carrying growth instead of leading it.",
];

export function FounderDependencySection() {
  return (
    <Section id="founder-dependency" variant="light">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        <div>
          <p className="text-brand-blue text-sm font-medium tracking-wide mb-3 uppercase">
            The founder bottleneck
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
            If Sales Depend Entirely On The Founder, The Business Is Not Scalable.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Most growth-stage companies hit the same wall: revenue works until it doesn&apos;t — because it was never built as a system.
          </p>

          <ul className="space-y-4 mb-8">
            {points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-3 text-charcoal-700"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-violet shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>

          <blockquote className="border-l-2 border-brand-blue pl-4 text-charcoal font-medium italic">
            &ldquo;Founders should lead growth, not manually carry it.&rdquo;
          </blockquote>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FounderSystemDiagram />
        </motion.div>
      </div>
    </Section>
  );
}
