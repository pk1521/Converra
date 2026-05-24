import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { CALENDLY_EMBED_URL } from "@/lib/links";

type CalendlyEmbedProps = {
  url?: string;
  className?: string;
  minHeight?: number;
};

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

let calendlyScriptPromise: Promise<void> | null = null;

function loadCalendlyScript() {
  if (typeof window === "undefined") return Promise.resolve();

  if (document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) {
    return Promise.resolve();
  }

  if (!calendlyScriptPromise) {
    calendlyScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Calendly failed to load"));
      document.body.appendChild(script);
    });
  }

  return calendlyScriptPromise;
}

export function CalendlyEmbed({
  url = CALENDLY_EMBED_URL,
  className,
  minHeight = 700,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.setAttribute("data-url", url);

    loadCalendlyScript().catch(() => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = `<iframe src="${url}?embed=true" title="Schedule a meeting with Converra" width="100%" height="${minHeight}" frameborder="0" style="border:0;border-radius:1rem;"></iframe>`;
    });
  }, [url, minHeight]);

  return (
    <div
      id="calendly-embed"
      className={cn(
        "overflow-hidden rounded-2xl border border-brand-teal/20 bg-white shadow-lg shadow-brand-navy/10 scroll-mt-28",
        className,
      )}
    >
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full"
        data-url={url}
        style={{ minWidth: 320, height: minHeight }}
      />
    </div>
  );
}
