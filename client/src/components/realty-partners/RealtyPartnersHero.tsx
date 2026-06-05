import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroStats } from "@/components/ui/HeroStats";
import { PageTexture } from "@/components/ui/PageTexture";
import { openBookRealtyConsultation } from "@/lib/links";
import { REALTY_PARTNERS_TAGLINE, REALTY_PRIMARY_CTA } from "@/lib/realty-partners";
import { PK_GROUPS_TAGLINE } from "@/lib/brand";
import {
  ArrowRight,
  BarChart3,
  Building2,
  MapPin,
  Megaphone,
  Users,
} from "lucide-react";

function SkylineSvg() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-[38%] text-realty-gold/15 pointer-events-none"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0,320 L0,220 L80,200 L160,210 L240,180 L320,190 L400,160 L480,170 L560,140 L640,150 L720,120 L800,130 L880,100 L960,110 L1040,90 L1120,100 L1200,80 L1280,90 L1360,70 L1440,85 L1440,320 Z"
      />
    </svg>
  );
}

const pipelineRows = [
  { label: "Qualified leads", value: "148", trend: "+22%", icon: Users },
  { label: "Site visits booked", value: "36", trend: "This week", icon: Building2 },
  { label: "Active campaigns", value: "4", trend: "Meta + Google", icon: Megaphone },
  { label: "Inventory velocity", value: "↑", trend: "Tracking weekly", icon: BarChart3 },
];

const stats = [
  { value: "Trichy", label: "Market focus" },
  { value: "100%", label: "Growth partner" },
  { value: "0%", label: "Broker commission" },
];

export function RealtyPartnersHero() {
  return (
    <section id="rp-hero" className="realty-hero relative min-h-screen flex items-center">
      <PageTexture variant="blueprint" />
      <PageTexture variant="grain" opacity={0.35} />
      <div className="realty-skyline" />
      <SkylineSvg />

      <div className="container-padding relative z-10 w-full hero-section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <p className="editorial-kicker mb-4 justify-center lg:justify-start text-realty-gold-light/80">
              {PK_GROUPS_TAGLINE}
            </p>
            <span className="realty-badge mb-6">{REALTY_PARTNERS_TAGLINE} · Trichy</span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white leading-display mb-6">
              Sell inventory faster —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-realty-gold-light to-realty-gold">
                without adding broker chaos
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-copy mb-8">
              For builders, developers, and plot promoters who need a dedicated growth desk — campaigns,
              lead flow, site visits, and sales systems that move units.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Button
                onClick={openBookRealtyConsultation}
                className="h-12 px-8 text-base rounded-full bg-gradient-to-r from-realty-gold to-realty-gold-muted hover:from-realty-gold-light hover:to-realty-gold text-realty-navy font-bold shadow-lg shadow-realty-gold/20"
              >
                {REALTY_PRIMARY_CTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto lg:mx-0 leading-copy mb-8 border-l-2 border-realty-gold/40 pl-4 text-left">
              <span className="text-realty-gold-light font-semibold">Partner with Converra</span> as your
              external growth department — not a one-time broker listing.
            </p>

            <HeroStats stats={stats} theme="realty" className="max-w-lg mx-auto lg:mx-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden md:block"
          >
            <div className="panel-realty p-6 md:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-realty-gold/15">
                <div>
                  <p className="text-[10px] uppercase tracking-label text-realty-gold/80 mb-1">
                    Project snapshot
                  </p>
                  <p className="font-display text-lg font-bold text-white">Growth dashboard</p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 px-2 py-1 rounded bg-white/5 border border-white/10">
                  LIVE
                </span>
              </div>
              <ul className="space-y-4">
                {pipelineRows.map(({ label, value, trend, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-realty-gold/10 text-realty-gold">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{label}</p>
                      <p className="font-display text-xl font-bold text-white tabular-nums">{value}</p>
                    </div>
                    <span className="text-[11px] font-medium text-realty-gold-light/90 shrink-0">{trend}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="h-3.5 w-3.5 text-realty-gold" />
                Illustrative metrics — we build reporting around your inventory.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
