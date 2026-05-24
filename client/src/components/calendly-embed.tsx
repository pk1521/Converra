import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CALENDLY_EMBED_URL } from "@/lib/links";

type CalendlyEmbedProps = {
  url?: string;
  className?: string;
  minHeight?: number;
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

function waitForCalendly(timeoutMs = 8000): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Calendly) {
      resolve();
      return;
    }

    const started = Date.now();
    const tick = () => {
      if (window.Calendly) {
        resolve();
        return;
      }
      if (Date.now() - started > timeoutMs) {
        reject(new Error("Calendly script timed out"));
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

function loadCalendlyScript(): Promise<void> {
  if (window.Calendly) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${CALENDLY_SCRIPT_SRC}"]`,
  );

  if (existing) {
    return waitForCalendly();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => waitForCalendly().then(resolve).catch(reject);
    script.onerror = () => reject(new Error("Calendly script failed to load"));
    document.head.appendChild(script);
  });
}

function toEmbedUrl(url: string) {
  const base = url.split("?")[0];
  return `${base}?embed=true&hide_gdpr_banner=1`;
}

export function CalendlyEmbed({
  url = CALENDLY_EMBED_URL,
  className,
  minHeight = 700,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent || useIframe) return;

    let cancelled = false;
    parent.innerHTML = "";

    loadCalendlyScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.Calendly) {
          throw new Error("Calendly unavailable");
        }
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
        });
      })
      .catch(() => {
        if (!cancelled) setUseIframe(true);
      });

    return () => {
      cancelled = true;
    };
  }, [url, minHeight, useIframe]);

  const embedSrc = toEmbedUrl(url);

  return (
    <div
      id="calendly-embed"
      className={cn(
        "relative overflow-hidden rounded-2xl border border-brand-teal/20 bg-white shadow-lg shadow-brand-navy/10 scroll-mt-28",
        className,
      )}
    >
      {useIframe ? (
        <iframe
          src={embedSrc}
          title="Schedule a meeting with Converra"
          width="100%"
          height={minHeight}
          frameBorder={0}
          className="w-full border-0"
          loading="lazy"
          allow="fullscreen"
        />
      ) : (
        <div
          ref={containerRef}
          className="calendly-inline-widget w-full"
          style={{ minWidth: 320, height: minHeight }}
        />
      )}
    </div>
  );
}
