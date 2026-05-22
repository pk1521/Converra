import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const transformations = [
  {
    category: "GTM Restructuring",
    challenge: "Fragmented outbound with no unified ICP or messaging framework.",
    system: "Built ICP-aligned sequences, CRM stages, and weekly pipeline reviews.",
    outcome: "Structured pipeline with stage-level accountability and forecast visibility.",
  },
  {
    category: "Workflow Optimization",
    challenge: "Manual follow-ups causing 60%+ lead drop-off after first touch.",
    system: "Mapped automation triggers across CRM, email, and task routing.",
    outcome: "Consistent multi-touch nurture without founder involvement.",
  },
  {
    category: "Operational Improvement",
    challenge: "Sales team using 4+ disconnected tools with no single source of truth.",
    system: "Consolidated stack, restructured CRM, and documented handoff protocols.",
    outcome: "Single revenue dashboard with real-time pipeline health metrics.",
  },
  {
    category: "CRM Transformation",
    challenge: "CRM adopted by less than 30% of team; pipeline data unreliable.",
    system: "Redesigned fields, stages, views, and adoption training program.",
    outcome: "Full-team CRM usage with accurate forecasting within 30 days.",
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" variant="light">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
          Illustrative transformations
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Client Transformations
        </h2>
        <p className="text-lg text-muted-foreground">
          Enterprise-grade outcomes from structured revenue system implementation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {transformations.map((t, i) => (
          <motion.div
            key={t.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="enterprise-card"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-violet mb-4">
              {t.category}
            </span>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Challenge</p>
                <p className="text-charcoal leading-relaxed">{t.challenge}</p>
              </div>
              <div className="flex items-center gap-2 text-brand-blue">
                <ArrowRight className="h-4 w-4 shrink-0" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase mb-1">System built</p>
                <p className="text-charcoal leading-relaxed">{t.system}</p>
              </div>
              <div className="flex gap-2 pt-2 border-t border-charcoal-700/10">
                <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Outcome</p>
                  <p className="text-charcoal font-medium leading-relaxed">{t.outcome}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
