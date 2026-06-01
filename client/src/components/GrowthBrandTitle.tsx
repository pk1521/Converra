import { cn } from "@/lib/utils";

type GrowthBrandTitleProps = {
  className?: string;
  size?: "nav" | "sheet" | "footer";
};

const sizeClasses = {
  nav: "text-sm sm:text-base lg:text-lg leading-snug",
  sheet: "text-xl",
  footer: "text-2xl",
} as const;

/** "Converra Growth Partners" wordmark — accent on Growth */
export function GrowthBrandTitle({ className, size = "nav" }: GrowthBrandTitleProps) {
  return (
    <span className={cn("font-display font-bold text-white tracking-tight", sizeClasses[size], className)}>
      Converra <span className="text-brand-cyan">Growth</span> Partners
    </span>
  );
}
