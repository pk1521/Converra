import { VerticalLogo } from "@/components/VerticalLogo";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "growth";
  className?: string;
  imageClassName?: string;
  linkTo?: string;
};

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <VerticalLogo
      vertical="growth"
      variant="footer"
      className={cn(className)}
      imageClassName={imageClassName}
    />
  );
}
