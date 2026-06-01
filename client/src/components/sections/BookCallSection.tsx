import { CalendlyEmbed } from "@/components/calendly-embed";
import { SectionHeader } from "@/components/ui/section-header";
import { CALENDLY_EMBED_URL } from "@/lib/links";
import { GP_SCHEDULE_CTA } from "@/lib/growth-partners";
import { Calendar, Clock, Video } from "lucide-react";

const points = [
  { icon: Video, text: "30-minute video call" },
  { icon: Clock, text: "Response within 24 hours" },
  { icon: Calendar, text: "No obligation consultation" },
];

export function BookCallSection() {
  return (
    <section id="book-a-call" className="brand-book-section scroll-mt-28">
      <div className="container-padding section-padding">
        <SectionHeader
          eyebrow="Book a call"
          title="Schedule your strategy session"
          description="Pick a time that works for you. We will review your revenue setup, identify gaps, and outline practical next steps."
          dark
        />
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div className="rounded-2xl border border-brand-teal/20 bg-brand-navy/40 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan mb-6">{GP_SCHEDULE_CTA}</p>
            <ul className="space-y-5">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 text-slate-200">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal/15 text-brand-cyan border border-brand-teal/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <CalendlyEmbed url={CALENDLY_EMBED_URL} minHeight={660} />
        </div>
      </div>
    </section>
  );
}
