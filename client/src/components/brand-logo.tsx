import { Link } from "wouter";
import { LOGO_GROWTH_PARTNERS, LOGO_REAL_ESTATE } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant: "growth" | "real-estate";
  className?: string;
  imageClassName?: string;
  linkTo?: string;
};

const config = {
  growth: {
    src: LOGO_GROWTH_PARTNERS,
    alt: "Converra Growth Partners, Part of PK Groups",
    href: "/",
  },
  "real-estate": {
    src: LOGO_REAL_ESTATE,
    alt: "Converra Consultancy & Real Estate, Part of PK Groups",
    href: "/real-estate",
  },
} as const;

export function BrandLogo({ variant, className, imageClassName, linkTo }: BrandLogoProps) {
  const { src, alt, href } = config[variant];
  const destination = linkTo ?? href;

  return (
    <Link href={destination} className={cn("inline-flex shrink-0 group", className)} aria-label={alt}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-10 w-auto object-contain md:h-12 rounded-2xl transition-transform duration-200 group-hover:scale-[1.02]",
          imageClassName,
        )}
      />
    </Link>
  );
}
