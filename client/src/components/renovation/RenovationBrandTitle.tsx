import { cn } from "@/lib/utils";

type RenovationBrandTitleProps = {
  className?: string;
  size?: "nav" | "sheet" | "footer";
};

const sizeClasses = {
  nav: "text-sm sm:text-base lg:text-lg leading-snug",
  sheet: "text-xl",
  footer: "text-2xl",
} as const;

/** "Converra Renovation Solutions" wordmark — accent on Renovation */
export function RenovationBrandTitle({ className, size = "nav" }: RenovationBrandTitleProps) {
  return (
    <span className={cn("font-display font-bold text-white tracking-tight", sizeClasses[size], className)}>
      Converra <span className="text-reno-gold">Renovation</span> Solutions
    </span>
  );
}
