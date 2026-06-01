import { CalendlyEmbed } from "@/components/calendly-embed";
import { RenovationSectionHeader } from "@/components/renovation/RenovationSectionHeader";
import { RENOVATION_CALENDLY_EMBED_URL } from "@/lib/links";
import { RENOVATION_PRIMARY_CTA } from "@/lib/renovation";
import { Calendar, Clock, MapPin } from "lucide-react";

const points = [
  { icon: MapPin, text: "Free on-site visit in Trichy & nearby" },
  { icon: Clock, text: "Transparent estimate within 48 hours" },
  { icon: Calendar, text: "End-to-end project coordination" },
];

export function RenovationContact() {
  return (
    <section id="book-a-call" className="reno-book-section scroll-mt-28">
      <div className="container-padding section-padding">
        <RenovationSectionHeader
          eyebrow="Book a visit"
          title="Schedule your site visit or estimate call"
          description="Choose a time that works for you. We will review your property and outline a practical renovation plan."
        />
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div className="rounded-2xl border border-reno-gold/20 bg-reno-navy-mid/60 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-reno-gold-light mb-6">{RENOVATION_PRIMARY_CTA}</p>
            <ul className="space-y-5">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 text-slate-200">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-reno-gold/15 text-reno-gold border border-reno-gold/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <CalendlyEmbed url={RENOVATION_CALENDLY_EMBED_URL} minHeight={660} />
        </div>
      </div>
    </section>
  );
}
