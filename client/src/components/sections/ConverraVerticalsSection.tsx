import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, LineChart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VerticalLogo } from "@/components/VerticalLogo";
import {
  GP_EXPLORE_LABEL,
  GP_FOOTER_KEYWORDS,
  GP_FOOTER_SUMMARY,
  GP_NAV_LABEL,
  GP_TAGLINE,
} from "@/lib/growth-partners";
import {
  REALTY_EXPLORE_LABEL,
  REALTY_FOOTER_KEYWORDS,
  REALTY_FOOTER_SUMMARY,
  REALTY_NAV_LABEL,
  REALTY_PARTNERS_TAGLINE,
} from "@/lib/realty-partners";
import {
  RENOVATION_EXPLORE_LABEL,
  RENOVATION_FOOTER_KEYWORDS,
  RENOVATION_FOOTER_SUMMARY,
  RENOVATION_NAV_LABEL,
  RENOVATION_TAGLINE,
} from "@/lib/renovation";
import { cn } from "@/lib/utils";

const verticals = [
  {
    id: "growth" as const,
    href: "/",
    title: GP_NAV_LABEL,
    summary: GP_FOOTER_SUMMARY,
    cta: GP_EXPLORE_LABEL,
    cardClass: "vertical-card-growth",
    icon: LineChart,
    iconWrap: "bg-brand-blue/10 text-brand-blue",
    tagline: GP_TAGLINE,
    keywords: GP_FOOTER_KEYWORDS,
  },
  {
    id: "realty" as const,
    href: "/realty-partners",
    title: REALTY_NAV_LABEL,
    summary: REALTY_FOOTER_SUMMARY,
    cta: REALTY_EXPLORE_LABEL,
    cardClass: "vertical-card-realty",
    icon: TrendingUp,
    iconWrap: "bg-realty-gold/15 text-realty-gold-muted",
    tagline: REALTY_PARTNERS_TAGLINE,
    keywords: REALTY_FOOTER_KEYWORDS,
  },
  {
    id: "renovation" as const,
    href: "/renovation",
    title: RENOVATION_NAV_LABEL,
    summary: RENOVATION_FOOTER_SUMMARY,
    cta: RENOVATION_EXPLORE_LABEL,
    cardClass: "vertical-card-reno",
    icon: Hammer,
    iconWrap: "bg-reno-gold/15 text-reno-gold-muted",
    tagline: RENOVATION_TAGLINE,
    keywords: RENOVATION_FOOTER_KEYWORDS,
  },
];

export function ConverraVerticalsSection() {
  return (
    <section id="converra-verticals" className="section-padding relative overflow-hidden section-light">
      <div className="absolute inset-0 texture-saas-grid opacity-40 pointer-events-none" />
      <div className="container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <span className="brand-badge mb-4">Part of Converra</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-5 leading-display">
            Three businesses. One standard of care.
          </h2>
          <p className="text-slate-600 text-lg leading-copy">
            Pick the team that matches your problem. Each vertical has its own people, process, and page.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {verticals.map((v, i) => (
            <motion.article
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn("flex flex-col h-full", v.cardClass)}
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <VerticalLogo vertical={v.id} variant="card" />
                <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", v.iconWrap)}>
                  <v.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{v.title}</h3>
              {v.tagline && (
                <p className="text-xs font-semibold uppercase tracking-label text-slate-500 mb-2">{v.tagline}</p>
              )}
              <p className="text-sm text-slate-600 leading-copy mb-4">{v.summary}</p>
              {v.keywords.length > 0 ? (
                <ul className="flex flex-wrap gap-1.5 mb-6">
                  {v.keywords.map((kw) => (
                    <li
                      key={kw}
                      className={cn(
                        "text-[10px] font-medium px-2 py-0.5 rounded-md border",
                        v.id === "growth" && "bg-brand-blue/10 border-brand-teal/20 text-brand-navy/80",
                        v.id === "realty" && "bg-realty-gold/10 border-realty-gold/20 text-realty-navy/80",
                        v.id === "renovation" && "bg-reno-gold/10 border-reno-gold/20 text-stone-700",
                      )}
                    >
                      {kw}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex-1" />
              )}
              <Button
                asChild
                variant="outline"
                className={cn(
                  "mt-auto rounded-full font-semibold w-full border-2",
                  v.id === "growth" && "border-brand-blue/30 text-brand-blue hover:bg-brand-blue/5",
                  v.id === "realty" && "border-realty-gold/40 text-realty-navy hover:bg-realty-gold/10",
                  v.id === "renovation" && "border-reno-gold/40 text-reno-charcoal hover:bg-reno-gold/10",
                )}
              >
                <Link href={v.href}>
                  {v.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
