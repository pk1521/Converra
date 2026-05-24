import { CalendlyEmbed } from "@/components/calendly-embed";
import { SectionHeader } from "@/components/ui/section-header";
import { CALENDLY_EMBED_URL, REAL_ESTATE_CALENDLY_EMBED_URL } from "@/lib/links";
import { GP_SCHEDULE_CTA } from "@/lib/growth-partners";
import { REAL_ESTATE_SCHEDULE_CTA } from "@/lib/real-estate";
import { Calendar, Clock, Video } from "lucide-react";

type BookCallSectionProps = {
  variant?: "growth" | "real-estate";
};

const copy = {
  growth: {
    eyebrow: "Book a call",
    title: "Schedule your strategy session",
    description:
      "Pick a time that works for you. We will review your revenue setup, identify gaps, and outline practical next steps.",
    cta: GP_SCHEDULE_CTA,
    points: [
      { icon: Video, text: "30-minute video call" },
      { icon: Clock, text: "Response within 24 hours" },
      { icon: Calendar, text: "No obligation consultation" },
    ],
    url: CALENDLY_EMBED_URL,
  },
  "real-estate": {
    eyebrow: "Book a call",
    title: "Schedule your consultation",
    description:
      "Discuss property sales, construction projects, or consultancy needs. Choose a slot and our team will confirm the details.",
    cta: REAL_ESTATE_SCHEDULE_CTA,
    points: [
      { icon: Video, text: "Property or project review" },
      { icon: Clock, text: "Fast follow-up from our team" },
      { icon: Calendar, text: "Flexible scheduling" },
    ],
    url: REAL_ESTATE_CALENDLY_EMBED_URL,
  },
};

export function BookCallSection({ variant = "growth" }: BookCallSectionProps) {
  const content = copy[variant];

  return (
    <section id="book-a-call" className="brand-book-section scroll-mt-28">
      <div className="container-padding section-padding">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          dark
        />

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div className="rounded-2xl border border-brand-teal/20 bg-brand-navy/40 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan mb-6">
              {content.cta}
            </p>
            <ul className="space-y-5">
              {content.points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 text-slate-200">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal/15 text-brand-cyan border border-brand-teal/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <CalendlyEmbed url={content.url} minHeight={660} />
        </div>
      </div>
    </section>
  );
}
