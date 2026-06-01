import { useState } from "react";
import { motion } from "framer-motion";
import { RenovationSectionHeader } from "@/components/renovation/RenovationSectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateLead } from "@/hooks/use-leads";
import { Loader2 } from "lucide-react";

const PROPERTY_TYPES = ["Home", "Apartment", "Villa", "Commercial", "Retail"];
const AGE_OPTIONS = ["Under 5 years", "5–15 years", "15–30 years", "30+ years"];

function estimateIncrease(type: string, age: string, sqft: number, budget: number) {
  let base = 8;
  if (type === "Villa" || type === "Commercial") base += 4;
  if (age.includes("15") || age.includes("30")) base += 6;
  if (sqft > 1500) base += 3;
  if (budget >= 500000) base += 5;
  if (budget >= 1000000) base += 8;
  return Math.min(base + Math.round(budget / 500000), 35);
}

export function RenovationCalculator() {
  const [propertyType, setPropertyType] = useState("");
  const [propertyAge, setPropertyAge] = useState("");
  const [sqft, setSqft] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const { mutate, isPending, isSuccess } = useCreateLead();

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const sqftNum = Number(sqft) || 1000;
    const budgetNum = Number(budget) || 300000;
    const pct = estimateIncrease(propertyType || "Home", propertyAge || "5–15 years", sqftNum, budgetNum);
    setResult(pct);

    if (name && email) {
      mutate({
        name,
        email,
        company: propertyType || "Renovation inquiry",
        phone: phone || undefined,
        message: `Renovation calculator\nType: ${propertyType}\nAge: ${propertyAge}\nSize: ${sqft} sq ft\nBudget: ₹${budgetNum.toLocaleString("en-IN")}\nEstimated value uplift: ~${pct}%`,
        source: "renovation",
      });
    }
  }

  return (
    <section id="reno-calculator" className="reno-section-dark section-padding scroll-mt-28">
      <div className="container-padding">
        <RenovationSectionHeader
          eyebrow="Calculator"
          title="Estimate Your Property Upgrade Potential"
          description="Enter your property details for an indicative value uplift range. Share your contact info to receive a detailed assessment."
        />

        <motion.form
          onSubmit={handleCalculate}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto reno-glass p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-300">Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType} required>
                <SelectTrigger className="bg-reno-navy-mid border-white/10 text-white">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Property Age</Label>
              <Select value={propertyAge} onValueChange={setPropertyAge} required>
                <SelectTrigger className="bg-reno-navy-mid border-white/10 text-white">
                  <SelectValue placeholder="Select age" />
                </SelectTrigger>
                <SelectContent>
                  {AGE_OPTIONS.map((a) => (
                    <SelectItem key={a} value={a}>{a}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Property Size (sq ft)</Label>
              <Input type="number" min={200} value={sqft} onChange={(e) => setSqft(e.target.value)} placeholder="1200" className="bg-reno-navy-mid border-white/10 text-white" required />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Renovation Budget (₹)</Label>
              <Input type="number" min={50000} value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="500000" className="bg-reno-navy-mid border-white/10 text-white" required />
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <p className="text-sm text-slate-400">Get your estimate by email (required)</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required className="bg-reno-navy-mid border-white/10 text-white" />
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="bg-reno-navy-mid border-white/10 text-white" />
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" className="bg-reno-navy-mid border-white/10 text-white sm:col-span-2" />
            </div>
          </div>

          {result !== null && (
            <div className="rounded-xl bg-reno-gold/15 border border-reno-gold/30 p-6 text-center">
              <p className="text-sm text-reno-gold-light uppercase tracking-wider mb-1">Potential value increase</p>
              <p className="text-4xl font-display font-bold text-white">~{result}%</p>
              <p className="text-xs text-slate-400 mt-2">Indicative only. Final assessment after site visit.</p>
            </div>
          )}

          {isSuccess && (
            <p className="text-sm text-reno-gold-light text-center">Thanks! We will follow up with a detailed assessment.</p>
          )}

          <Button type="submit" disabled={isPending} className="w-full h-12 rounded-full bg-reno-gold hover:bg-reno-gold-light text-reno-navy font-bold">
            {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Calculate & Request Assessment"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
