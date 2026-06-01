import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, LineChart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGO_GROWTH_PARTNERS } from "@/lib/brand";
import { GP_EXPLORE_LABEL, GP_NAV_LABEL } from "@/lib/growth-partners";
import {
  REALTY_EXPLORE_LABEL,
  REALTY_FOOTER_SUMMARY,
  REALTY_NAV_LABEL,
  REALTY_PARTNERS_TAGLINE,
} from "@/lib/realty-partners";
import {
  RENOVATION_EXPLORE_LABEL,
  RENOVATION_FOOTER_SUMMARY,
  RENOVATION_NAV_LABEL,
  RENOVATION_TAGLINE,
} from "@/lib/renovation";

const verticals = [
  {
    id: "growth",
    href: "/",
    title: GP_NAV_LABEL,
    summary: "Revenue systems and GTM infrastructure for founder-led and growth-stage companies.",
    cta: GP_EXPLORE_LABEL,
    icon: LineChart,
    accent: "brand" as const,
    logo: LOGO_GROWTH_PARTNERS,
    useLogo: true,
    tagline: null,
  },
  {
    id: "realty",
    href: "/realty-partners",
    title: REALTY_NAV_LABEL,
    summary: REALTY_FOOTER_SUMMARY,
    cta: REALTY_EXPLORE_LABEL,
    icon: TrendingUp,
    accent: "gold" as const,
    logo: null,
    useLogo: false,
    tagline: REALTY_PARTNERS_TAGLINE,
  },
  {
    id: "renovation",
    href: "/renovation",
    title: RENOVATION_NAV_LABEL,
    summary: RENOVATION_FOOTER_SUMMARY,
    cta: RENOVATION_EXPLORE_LABEL,
    icon: Hammer,
    accent: "reno" as const,
    logo: null,
    useLogo: false,
    tagline: RENOVATION_TAGLINE,
  },
];

export function ConverraVerticalsSection() {
  return (
    <section id="converra-verticals" className="section-padding section-light">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="brand-badge mb-4">Part of Converra</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Three focused businesses. One PK Groups family.
          </h2>
          <p className="text-slate-600 text-lg">
            Growth consulting, real estate growth partnerships, and renovation solutions. Each with its own dedicated page.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {verticals.map((v, i) => (
            <motion.article
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`enterprise-card p-8 flex flex-col h-full ${
                v.accent === "gold" ? "border-realty-gold/25" : v.accent === "reno" ? "border-reno-gold/25" : ""
              }`}
            >
              <div className="mb-6">
                {v.useLogo && v.logo ? (
                  <img src={v.logo} alt="" className="h-12 w-auto object-contain rounded-xl mb-4" />
                ) : (
                  <div
                    className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${
                      v.accent === "gold" ? "bg-realty-navy" : "bg-reno-charcoal"
                    }`}
                  >
                    <v.icon className={`h-6 w-6 ${v.accent === "gold" ? "text-realty-gold" : "text-reno-gold"}`} />
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{v.title}</h3>
                {v.tagline && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">{v.tagline}</p>
                )}
                <p className="text-sm text-slate-600 leading-relaxed">{v.summary}</p>
              </div>
              <Button
                asChild
                className={`mt-auto rounded-full font-semibold w-full ${
                  v.accent === "gold"
                    ? "bg-realty-navy hover:bg-realty-navy-mid text-realty-gold-light"
                    : v.accent === "reno"
                      ? "bg-reno-charcoal hover:bg-reno-navy text-reno-gold-light"
                      : "bg-brand-blue hover:bg-brand-blue-dark text-white"
                }`}
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
