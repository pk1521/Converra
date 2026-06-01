import { cn } from "@/lib/utils";

type RealtyBrandTitleProps = {
  className?: string;
  size?: "nav" | "sheet" | "footer";
};

const sizeClasses = {
  nav: "text-sm sm:text-base lg:text-lg leading-snug",
  sheet: "text-xl",
  footer: "text-2xl",
} as const;

/** "Converra Realty Partners" wordmark — accent on Realty */
export function RealtyBrandTitle({ className, size = "nav" }: RealtyBrandTitleProps) {
  return (
    <span className={cn("font-display font-bold text-white tracking-tight", sizeClasses[size], className)}>
      Converra <span className="text-realty-gold">Realty</span> Partners
    </span>
  );
}
