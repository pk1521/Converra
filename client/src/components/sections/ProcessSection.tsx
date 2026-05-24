import { Section } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/visuals/ProcessTimeline";

export function ProcessSection() {
  return (
    <Section id="process" variant="light">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-brand-violet text-sm font-medium tracking-wide mb-3 uppercase">
          Our framework
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
          System-Driven Revenue Transformation
        </h2>
        <p className="text-lg text-muted-foreground">
          Six phases. One outcome: a revenue engine your business can run without chaos.
        </p>
      </div>
      <ProcessTimeline />
    </Section>
  );
}
