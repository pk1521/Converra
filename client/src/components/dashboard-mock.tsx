import { Search, Bell, Menu, Users, BarChart3, TrendingUp, Workflow, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

/** CRM architecture panel — RevOps infrastructure visual */
export function CrmArchitecturePanel() {
  return (
    <motion.div
      className="w-full min-w-0 max-w-4xl mx-auto bg-charcoal-800 rounded-xl shadow-2xl border border-white/10 overflow-hidden"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="min-w-0 border-b border-white/10 flex items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:h-14 bg-charcoal-900/50">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <Menu className="w-5 h-5 shrink-0 text-slate-400" />
          <div className="font-display font-semibold text-white truncate text-sm sm:text-base">
            Revenue Operations Hub
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden sm:flex w-40 md:w-56 h-8 bg-charcoal border border-white/10 rounded-md items-center px-3 gap-2">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-xs text-slate-500">Search pipeline...</span>
          </div>
          <Bell className="w-5 h-5 text-slate-400" />
        </div>
      </div>

      <div className="flex min-h-[280px] md:h-[360px]">
        <div className="w-56 border-r border-white/10 p-4 space-y-1 bg-charcoal-900/30 hidden md:block shrink-0">
          {[
            { icon: BarChart3, label: "Pipeline", active: true },
            { icon: Workflow, label: "Workflows", active: false },
            { icon: GitBranch, label: "Automations", active: false },
            { icon: Users, label: "Contacts", active: false },
            { icon: TrendingUp, label: "Forecast", active: false },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                item.active
                  ? "bg-brand-blue/15 text-brand-blue"
                  : "text-slate-400 hover:bg-white/5"
              }`}
            >
              <item.icon className={`w-4 h-4 ${item.active ? "text-brand-blue" : "text-slate-500"}`} />
              {item.label}
            </div>
          ))}
        </div>

        <div className="flex-1 min-w-0 p-4 sm:p-6 flex flex-col overflow-hidden">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-lg font-display font-bold text-white shrink-0">Pipeline Health</h3>
            <div className="flex gap-2 flex-wrap">
              <div className="px-3 py-1 bg-charcoal border border-white/10 rounded-md text-sm text-slate-400">
                Live
              </div>
              <div className="px-3 py-1 bg-brand-blue text-white rounded-md text-sm font-medium">
                System View
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {[
              { label: "Pipeline Value", value: "$842K", trend: "+18%" },
              { label: "Active Deals", value: "47", trend: "+6" },
              { label: "Win Rate", value: "28%", trend: "+4%" },
            ].map((stat, i) => (
              <div key={i} className="bg-charcoal-900/50 p-3 rounded-xl border border-white/10">
                <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                <div className="flex items-end justify-between gap-2">
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs font-medium text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-full">
                    {stat.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-charcoal-900/50 rounded-xl border border-white/10 p-4 flex-1 flex items-end gap-1">
            {[35, 55, 40, 70, 50, 85, 65, 90, 55, 75, 45, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-brand-blue/20 hover:bg-brand-blue/40 transition-all"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/** @deprecated Use CrmArchitecturePanel */
export const DashboardMock = CrmArchitecturePanel;
