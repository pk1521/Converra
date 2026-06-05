import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "max-w-3xl mb-14 md:mb-20",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn("section-eyebrow-wrap", isCenter && "section-eyebrow-wrap--center")}>
          <span className="brand-badge">{eyebrow}</span>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-[2.625rem] font-bold leading-display",
          dark ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-copy max-w-2xl",
            dark ? "text-slate-300" : "text-slate-600",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-7 h-0.5 w-14 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal",
          isCenter && "mx-auto",
        )}
      />
    </motion.header>
  );
}
