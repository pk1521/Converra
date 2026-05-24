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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <span className="brand-badge mb-4">{eyebrow}</span>}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight",
          dark ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
      <motion.div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal",
          isCenter && "mx-auto",
        )}
      />
    </motion.div>
  );
}
