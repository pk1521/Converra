import { Link } from "wouter";
import {
  LOGO_GROWTH_PARTNERS,
  LOGO_REALTY_PARTNERS,
  LOGO_RENOVATION_SOLUTIONS,
  PK_GROUPS_TAGLINE,
} from "@/lib/brand";
import { GP_NAME } from "@/lib/growth-partners";
import { REALTY_PARTNERS_NAME } from "@/lib/realty-partners";
import { RENOVATION_NAME } from "@/lib/renovation";
import { cn } from "@/lib/utils";

type Vertical = "growth" | "realty" | "renovation";

const verticalConfig = {
  growth: {
    src: LOGO_GROWTH_PARTNERS,
    href: "/",
    name: GP_NAME,
  },
  realty: {
    src: LOGO_REALTY_PARTNERS,
    href: "/realty-partners",
    name: REALTY_PARTNERS_NAME,
  },
  renovation: {
    src: LOGO_RENOVATION_SOLUTIONS,
    href: "/renovation",
    name: RENOVATION_NAME,
  },
} as const;

type VerticalLogoProps = {
  vertical: Vertical;
  variant?: "nav" | "sheet" | "footer" | "card";
  className?: string;
  imageClassName?: string;
};

const sizeClasses = {
  nav: "h-11 sm:h-12 md:h-[3.25rem] max-w-[9.5rem] sm:max-w-[11rem] md:max-w-[12.5rem]",
  sheet: "h-14 sm:h-16 max-w-[14rem] sm:max-w-[16rem]",
  footer: "h-14 sm:h-16 max-w-[14rem] sm:max-w-[16rem]",
  card: "h-12 sm:h-14 max-w-[11rem] sm:max-w-[12rem]",
} as const;

export function VerticalLogo({
  vertical,
  variant = "nav",
  className,
  imageClassName,
}: VerticalLogoProps) {
  const { src, href, name } = verticalConfig[vertical];

  return (
    <Link
      href={href}
      className={cn("inline-flex shrink-0 group", className)}
      aria-label={`${name}, ${PK_GROUPS_TAGLINE}`}
    >
      <span
        className={cn(
          "inline-flex overflow-hidden bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-[1.02]",
          variant === "nav" ? "rounded-xl" : "rounded-2xl",
        )}
      >
        <img
          src={src}
          alt={name}
          className={cn("w-auto object-contain object-left", sizeClasses[variant], imageClassName)}
        />
      </span>
    </Link>
  );
}
