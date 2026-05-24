import { motion } from "framer-motion";

const BUBBLES = [
  { size: 120, x: "8%", y: "18%", delay: 0, color: "rgba(0,102,179,0.35)" },
  { size: 80, x: "85%", y: "12%", delay: 1.2, color: "rgba(46,196,201,0.3)" },
  { size: 160, x: "72%", y: "55%", delay: 0.6, color: "rgba(0,139,156,0.28)" },
  { size: 56, x: "22%", y: "72%", delay: 2, color: "rgba(0,102,179,0.22)" },
  { size: 100, x: "48%", y: "35%", delay: 1.8, color: "rgba(0,139,156,0.2)" },
  { size: 44, x: "92%", y: "78%", delay: 0.4, color: "rgba(46,196,201,0.35)" },
];

const RAYS = [
  { rotate: -18, left: "10%", delay: 0 },
  { rotate: 12, left: "45%", delay: 2 },
  { rotate: -8, left: "78%", delay: 4 },
];

export function GrowthAmbientLayer({ intense = false }: { intense?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      <div className="gp-ray-field" />

      {RAYS.map((ray, i) => (
        <motion.div
          key={`ray-${i}`}
          className="gp-light-ray"
          style={{ left: ray.left, rotate: `${ray.rotate}deg` }}
          animate={{ opacity: [0.15, 0.45, 0.15], scaleY: [0.9, 1.1, 0.9] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: ray.delay, ease: "easeInOut" }}
        />
      ))}

      {BUBBLES.map((b, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="gp-float-bubble"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            background: `radial-gradient(circle at 30% 30%, ${b.color}, transparent 70%)`,
          }}
          animate={{
            y: [0, -24 - i * 4, 0],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 7 + i * 0.8,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {intense && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-violet/20 via-brand-blue/10 to-transparent blur-3xl" />
          <div className="gp-shimmer-sweep" />
        </>
      )}
    </div>
  );
}
