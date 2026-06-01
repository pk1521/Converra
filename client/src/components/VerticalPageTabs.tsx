import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { CONVERRA_VERTICAL_PAGES } from "@/lib/vertical-pages";

type VerticalTheme = "growth" | "realty" | "renovation";

const activeClass: Record<VerticalTheme, string> = {
  growth: "text-brand-cyan",
  realty: "text-realty-gold-light",
  renovation: "text-reno-gold-light",
};

const inactiveClass: Record<VerticalTheme, string> = {
  growth: "text-slate-400 hover:text-brand-cyan/90",
  realty: "text-slate-400 hover:text-realty-gold-light/90",
  renovation: "text-slate-400 hover:text-reno-gold-light/90",
};

type VerticalPageTabsProps = {
  theme: VerticalTheme;
  variant?: "header" | "menu";
  className?: string;
};

export function VerticalPageTabs({
  theme,
  variant = "header",
  className,
}: VerticalPageTabsProps) {
  const [location] = useLocation();

  if (variant === "menu") {
    return (
      <div className={cn("flex flex-col gap-3", className)}>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Converra businesses
        </p>
        {CONVERRA_VERTICAL_PAGES.map(({ label, href }) => {
          const isActive = location === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-lg font-medium transition-colors",
                isActive ? activeClass[theme] : "text-slate-100 hover:text-white",
              )}
            >
              {label}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <nav
      className={cn(
        "flex items-center gap-2 sm:gap-3 overflow-x-auto max-w-full",
        "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      role="tablist"
      aria-label="Converra businesses"
    >
      {CONVERRA_VERTICAL_PAGES.map(({ label, href }, index) => {
        const isActive = location === href;
        return (
          <span key={href} className="flex items-center gap-2 sm:gap-3 shrink-0">
            {index > 0 && (
              <span className="h-3.5 w-px bg-white/15 shrink-0" aria-hidden />
            )}
            <Link
              href={href}
              role="tab"
              aria-selected={isActive}
              className={cn(
                "text-[10px] sm:text-xs font-medium whitespace-nowrap transition-colors",
                isActive ? activeClass[theme] : inactiveClass[theme],
              )}
            >
              {label}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
