import { Navbar } from "@/components/navbar";
import { BookCallSection } from "@/components/sections/BookCallSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "@/components/visuals/ProcessTimeline";
import { CheckCircle, ArrowRight, Target, Layers, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { openBookStrategyCall } from "@/lib/links";
import { GP_SCHEDULE_CTA } from "@/lib/growth-partners";

export default function About() {
  return (
    <div className="theme-growth flex min-h-full flex-1 flex-col bg-offwhite overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full">
      <section className="hero-revops relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="container-padding relative z-10 text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-cyan font-medium tracking-widest uppercase text-sm mb-4"
          >
            About us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            We build revenue systems, not slide decks.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            We build revenue systems for founder-led and growth-stage companies: GTM infrastructure, not generic consulting.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-offwhite text-charcoal">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-charcoal">Converra Growth Partners</strong> is a revenue systems and GTM infrastructure consultancy. We help startups and growth-stage companies transform ad-hoc sales into structured, scalable revenue engines.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our focus is operational: CRM architecture, outbound workflows, automation mapping, and sales process design, everything needed to make revenue predictable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don&apos;t function as a traditional agency or outsourced sales team. We architect the systems your business runs on, so founders lead growth instead of manually carrying it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-800">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">What We Do</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Most companies don&apos;t have a lead problem. They have a revenue systems problem. We diagnose gaps, architect solutions, and implement infrastructure that compounds.
            </p>
            <div className="glass-card p-6 md:p-8 mb-8">
              <h3 className="font-semibold text-white mb-4">Our capabilities include:</h3>
              <ul className="space-y-3">
                {[
                  "GTM strategy and ICP alignment",
                  "CRM restructuring and pipeline design",
                  "Outbound system architecture",
                  "Follow-up automation mapping",
                  "Sales process documentation and optimization",
                  "Revenue operations alignment across teams",
                ].map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-padding max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
            Our Framework
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            Six phases from audit to scale, the same methodology behind our Revenue Engine Sprint.
          </p>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">Our Philosophy</h2>
            <blockquote className="border-l-2 border-brand-blue pl-6 text-xl text-slate-200 italic mb-8">
              Revenue is engineered. Predictable growth needs structured execution.
            </blockquote>
            <p className="text-slate-300 text-lg leading-relaxed">
              Scalable companies are built on systems, not luck, not heroics, and not founder-dependent manual effort. When CRM, outbound, automation, and pipeline work as one system, growth becomes measurable and repeatable.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Target, title: "Outcome-driven", desc: "Every engagement targets measurable revenue infrastructure." },
              { icon: Layers, title: "System-first", desc: "We build processes and tools, not one-off campaigns." },
              { icon: BarChart3, title: "Operational", desc: "RevOps discipline across your entire GTM stack." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center">
                <item.icon className="h-8 w-8 text-brand-cyan mx-auto mb-4" />
                <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-800 relative overflow-hidden">
        <div className="container-padding relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to build your revenue engine?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Growth without systems creates chaos. Let&apos;s architect yours.
          </p>
          <Button
            onClick={openBookStrategyCall}
            className="h-14 px-10 text-lg font-semibold bg-brand-blue hover:bg-brand-blue-dark text-white"
          >
            {GP_SCHEDULE_CTA}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <BookCallSection />
      </main>
      <FooterSection />
    </div>
  );
}
