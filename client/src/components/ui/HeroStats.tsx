import { cn } from "@/lib/utils";

type HeroStatsProps = {
  stats: { value: string; label: string }[];
  theme: "growth" | "realty" | "renovation";
  className?: string;
};

const themeStyles = {
  growth: {
    wrap: "border-brand-teal/25 bg-brand-navy/40",
    value: "text-brand-cyan",
    label: "text-slate-400",
    divider: "bg-brand-teal/20",
  },
  realty: {
    wrap: "border-realty-gold/25 bg-realty-navy/50",
    value: "text-realty-gold-light",
    label: "text-slate-400",
    divider: "bg-realty-gold/20",
  },
  renovation: {
    wrap: "border-reno-gold/25 bg-reno-navy/50",
    value: "text-reno-gold-light",
    label: "text-slate-400",
    divider: "bg-reno-gold/20",
  },
};

export function HeroStats({ stats, theme, className }: HeroStatsProps) {
  const s = themeStyles[theme];

  return (
    <div
      className={cn(
        "flex flex-wrap items-stretch gap-px overflow-hidden rounded-2xl border backdrop-blur-md",
        s.wrap,
        className,
      )}
    >
      {stats.map(({ value, label }, i) => (
        <div
          key={label}
          className={cn(
            "flex flex-1 min-w-[7rem] flex-col gap-0.5 px-5 py-4 sm:px-6 sm:py-5",
            i > 0 && "border-l border-white/[0.06]",
          )}
        >
          <span className={cn("font-display text-2xl sm:text-3xl font-bold tabular-nums tracking-tight", s.value)}>
            {value}
          </span>
          <span className={cn("text-[11px] sm:text-xs font-medium uppercase tracking-label leading-snug", s.label)}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
