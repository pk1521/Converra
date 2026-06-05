import { cn } from "@/lib/utils";

type PageTextureProps = {
  variant: "saas-grid" | "blueprint" | "construction" | "grain";
  className?: string;
  opacity?: number;
};

export function PageTexture({ variant, className, opacity = 1 }: PageTextureProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-[1]", className)}
      style={{ opacity }}
    >
      {variant === "grain" && <div className="texture-grain absolute inset-0" />}
      {variant === "saas-grid" && <div className="texture-saas-grid absolute inset-0" />}
      {variant === "blueprint" && <div className="texture-blueprint absolute inset-0" />}
      {variant === "construction" && <div className="texture-construction absolute inset-0" />}
    </div>
  );
}
