import { motion } from "framer-motion";

export function FounderSystemDiagram() {
  return (
    <div className="relative rounded-2xl border border-charcoal-700/10 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-red-500/80 mb-4">
            Without systems
          </p>
          <div className="flex flex-col items-center gap-3">
            <motion.div
              className="w-full max-w-[140px] rounded-xl border-2 border-red-400/40 bg-red-50 px-4 py-3 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-charcoal">Founder</span>
              <p className="text-[10px] text-muted-foreground mt-1">Sales · Ops · Follow-up</p>
            </motion.div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-px h-4 bg-red-300/50" />
            ))}
            <div className="flex gap-2 opacity-40">
              {["Leads", "CRM", "Pipeline"].map((l) => (
                <div key={l} className="rounded-lg border border-dashed border-charcoal-700/20 px-2 py-1 text-[10px] text-muted-foreground">
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4">
            With revenue systems
          </p>
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="w-full max-w-[140px] rounded-xl border border-brand-blue/30 bg-brand-blue/5 px-4 py-2 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-semibold text-charcoal">Founder</span>
              <p className="text-[10px] text-brand-blue mt-0.5">Strategy & leadership</p>
            </motion.div>
            <div className="w-px h-3 bg-brand-blue/30" />
            <div className="grid grid-cols-3 gap-2 w-full">
              {[
                { label: "Outbound", color: "#3B82F6" },
                { label: "CRM", color: "#6366F1" },
                { label: "Pipeline", color: "#22D3EE" },
              ].map((node, i) => (
                <motion.div
                  key={node.label}
                  className="rounded-lg px-2 py-2 text-center text-[10px] font-medium text-white"
                  style={{ backgroundColor: node.color, opacity: 0.85 }}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 0.85, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {node.label}
                </motion.div>
              ))}
            </div>
            <motion.div
              className="w-full rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet px-3 py-2 text-center text-[10px] font-semibold text-white mt-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Predictable Revenue
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
