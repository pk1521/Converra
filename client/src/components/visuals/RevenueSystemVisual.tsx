import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import {
  ArrowDown,
  FileSpreadsheet,
  Inbox,
  MessageSquare,
  User,
  GitBranch,
  Send,
  Handshake,
  Target,
} from "lucide-react";

const chaosCards = [
  {
    label: "Founder's inbox",
    sub: "Deals buried in threads",
    icon: Inbox,
    rotate: -6,
    top: "2rem",
    left: "0.75rem",
    zIndex: 30,
    accent: "border-rose-400/45 bg-rose-950/40",
    iconWrap: "bg-rose-500/20 text-rose-300",
    glow: "shadow-[0_0_28px_-6px_rgba(251,113,133,0.45)]",
    delay: "0s",
  },
  {
    label: "Pipeline_v4_final.xlsx",
    sub: "Last edited by founder",
    icon: FileSpreadsheet,
    rotate: 4,
    top: "0.5rem",
    right: "0.75rem",
    zIndex: 20,
    accent: "border-emerald-400/25 bg-emerald-950/30",
    iconWrap: "bg-emerald-500/15 text-emerald-300/90",
    glow: "",
    delay: "0.8s",
  },
  {
    label: "I'll follow up Monday",
    sub: "Sticky note · no owner",
    icon: MessageSquare,
    rotate: -2,
    bottom: "0.75rem",
    left: "calc(50% - 6.75rem)",
    zIndex: 10,
    accent: "border-amber-300/35 bg-amber-400/10",
    iconWrap: "bg-amber-400/20 text-amber-200/90",
    glow: "shadow-[0_4px_20px_-4px_rgba(251,191,36,0.25)]",
    delay: "1.6s",
  },
];

const systemSteps = [
  { label: "Lead", icon: Target, ringDelay: "0s" },
  { label: "Qualify", icon: GitBranch, ringDelay: "0.8s" },
  { label: "Outbound", icon: Send, ringDelay: "1.6s" },
  { label: "Close", icon: Handshake, ringDelay: "2.4s" },
];

export function RevenueSystemVisual() {
  return (
    <div className="relative p-5 md:p-7">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-0 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative mb-6">
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-label text-slate-400 mb-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          Reality check
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-xl md:text-2xl font-bold text-white leading-tight"
        >
          Where does your pipeline{" "}
          <span className="text-gradient-brand">actually live?</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08 }}
          className="text-sm text-slate-500 mt-2 leading-relaxed"
        >
          Be honest. Most founder-led teams look like this.
        </motion.p>
      </div>

      <div className="gp-chaos-zone relative h-[172px] mb-1">
        <div className="absolute inset-0 opacity-30 texture-saas-grid pointer-events-none" />

        <div className="absolute top-3.5 left-3.5 z-40 flex items-center gap-2 rounded-full border border-rose-400/25 bg-rose-950/50 px-2.5 py-1 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-400" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-label text-rose-200/90">
            Founder-dependent
          </span>
        </div>

        {chaosCards.map((card, i) => {
          const Icon = card.icon;
          const positionStyle: CSSProperties = {
            top: card.top,
            left: card.left,
            right: card.right,
            bottom: card.bottom,
            zIndex: card.zIndex,
            ["--chaos-rotate" as string]: `${card.rotate}deg`,
            ["--chaos-delay" as string]: card.delay,
          };

          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.88, rotate: card.rotate - 10 }}
              animate={{ opacity: 1, scale: 1, rotate: card.rotate }}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={positionStyle}
              className={`gp-chaos-card gp-chaos-float absolute w-[min(100%,13.5rem)] px-3.5 py-3 ${card.accent} ${card.glow}`}
            >
              <div className="flex items-start gap-3">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${card.iconWrap}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-xs font-semibold text-slate-100 leading-snug">{card.label}</p>
                  <p className="text-[10px] text-slate-500 mt-1 leading-snug">{card.sub}</p>
                </div>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="absolute bottom-3.5 left-3.5 z-40 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-black/20 px-2.5 py-1.5 backdrop-blur-sm"
        >
          <User className="h-3.5 w-3.5 text-slate-500" />
          <span className="text-[10px] font-medium text-slate-500">One person holds it all</span>
        </motion.div>
      </div>

      <div className="gp-relocate-bridge py-2">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[10px] font-bold uppercase text-brand-cyan mb-1"
        >
          We relocate it
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.48 }}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-brand-teal/50 bg-gradient-to-b from-brand-teal/25 to-brand-navy/80 shadow-[0_0_24px_-2px_rgba(0,139,156,0.65)]"
        >
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-brand-cyan" />
          </motion.span>
          <span className="absolute inset-0 rounded-full border border-brand-cyan/20 animate-ping opacity-30" />
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.58, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="gp-system-zone"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-5 pt-1">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-label text-brand-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(46,196,201,0.8)]" />
            Team-run engine
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Documented · Owned · Repeatable</span>
        </div>

        <div className="relative flex items-start justify-between gap-1 px-1">
          <div className="gp-flow-track">
            <div className="gp-flow-track-fill" />
            <div className="gp-flow-track-shimmer" />
          </div>

          {systemSteps.map(({ label, icon: Icon, ringDelay }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68 + i * 0.09 }}
              className="relative z-10 flex flex-col items-center gap-2 flex-1"
            >
              <span
                className="gp-step-node"
                style={{ ["--step-delay" as string]: ringDelay }}
              >
                <Icon className="h-4 w-4 text-brand-cyan relative z-10" />
              </span>
              <span className="text-[10px] font-semibold text-slate-300 tracking-wide">{label}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-slate-400 leading-relaxed px-2">
          CRM stages, outbound sequences, and handoffs your{" "}
          <span className="text-brand-cyan font-semibold">whole team</span> can run.
        </p>
      </motion.div>
    </div>
  );
}
