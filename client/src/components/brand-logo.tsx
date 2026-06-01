import { Link } from "wouter";
import { LOGO_GROWTH_PARTNERS } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "growth";
  className?: string;
  imageClassName?: string;
  linkTo?: string;
};

export function BrandLogo({ className, imageClassName, linkTo = "/" }: BrandLogoProps) {
  return (
    <Link
      href={linkTo}
      className={cn("inline-flex shrink-0 group", className)}
      aria-label="Converra Growth Partners, Part of PK Groups"
    >
      <img
        src={LOGO_GROWTH_PARTNERS}
        alt="Converra Growth Partners"
        className={cn(
          "h-10 w-auto object-contain md:h-12 rounded-2xl transition-transform duration-200 group-hover:scale-[1.02]",
          imageClassName,
        )}
      />
    </Link>
  );
}
