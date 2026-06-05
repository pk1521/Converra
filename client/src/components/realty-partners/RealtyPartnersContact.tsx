import { CalendlyEmbed } from "@/components/calendly-embed";
import { RealtySectionHeader } from "@/components/realty-partners/RealtySectionHeader";
import { REALTY_CALENDLY_EMBED_URL } from "@/lib/links";
import { REALTY_PRIMARY_CTA } from "@/lib/realty-partners";
import { Calendar, Clock, Video } from "lucide-react";

const points = [
  { icon: Video, text: "30-minute growth consultation" },
  { icon: Clock, text: "Response within 24 hours" },
  { icon: Calendar, text: "Trichy & regional market expertise" },
];

export function RealtyPartnersContact() {
  return (
    <section id="book-a-call" className="realty-book-section scroll-mt-28">
      <div className="container-padding section-padding">
        <RealtySectionHeader
          eyebrow="Book a call"
          title="Schedule your growth consultation"
          description="Pick a time that works for you. We will review your project, inventory, and growth goals."
        />

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div className="rounded-2xl border border-realty-gold/20 bg-realty-navy/40 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-realty-gold-light mb-6">
              {REALTY_PRIMARY_CTA}
            </p>
            <ul className="space-y-5">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 text-slate-200">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-realty-gold/15 text-realty-gold border border-realty-gold/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <CalendlyEmbed url={REALTY_CALENDLY_EMBED_URL} minHeight={660} />
        </div>
      </div>
    </section>
  );
}
