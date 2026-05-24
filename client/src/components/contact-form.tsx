import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  GP_FORM_SUBMIT,
  GP_FORM_SUBTITLE,
  GP_FORM_TITLE,
} from "@/lib/growth-partners";
import {
  REAL_ESTATE_FORM_SUBMIT,
  REAL_ESTATE_FORM_SUBTITLE,
  REAL_ESTATE_FORM_TITLE,
} from "@/lib/real-estate";

type ContactFormVariant = "growth" | "real-estate";

type ContactFormProps = {
  variant?: ContactFormVariant;
};

const PROPERTY_TYPES = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "mixed", label: "Mixed / Other" },
] as const;

export function ContactForm({ variant = "growth" }: ContactFormProps) {
  const isRealEstate = variant === "real-estate";
  const [propertyType, setPropertyType] = useState("");
  const { mutate, isPending, isSuccess, reset } = useCreateLead();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InsertLead) {
    const messageParts: string[] = [];

    if (isRealEstate && propertyType) {
      const label = PROPERTY_TYPES.find((p) => p.value === propertyType)?.label;
      if (label) messageParts.push(`Property type: ${label}`);
    }
    if (data.message?.trim()) {
      messageParts.push(data.message.trim());
    }

    mutate({
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone?.trim() || undefined,
      message: messageParts.length > 0 ? messageParts.join("\n\n") : undefined,
      source: isRealEstate ? "real-estate" : "growth-partners",
    });
  }

  function handleSendAnother() {
    reset();
    setPropertyType("");
    form.reset();
  }

  const title = isRealEstate ? REAL_ESTATE_FORM_TITLE : GP_FORM_TITLE;
  const subtitle = isRealEstate ? REAL_ESTATE_FORM_SUBTITLE : GP_FORM_SUBTITLE;
  const submitLabel = isRealEstate ? REAL_ESTATE_FORM_SUBMIT : GP_FORM_SUBMIT;
  const submitClass = isRealEstate
    ? "bg-brand-teal hover:bg-brand-teal/90 text-white shadow-brand-teal/25"
    : "bg-brand-blue hover:bg-brand-blue-dark text-white shadow-brand-blue/25";

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-charcoal-800 p-8 rounded-2xl border border-white/10 text-center space-y-4 min-h-[320px] flex flex-col items-center justify-center"
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
            isRealEstate ? "bg-brand-teal/20 text-brand-cyan" : "bg-brand-blue/20 text-brand-blue"
          }`}
        >
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white">Message received</h3>
        <p className="text-slate-400 max-w-xs mx-auto text-sm">
          Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={handleSendAnother}
          className="mt-4 border-white/20 text-white hover:bg-white/10"
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-charcoal-800 p-8 rounded-2xl border border-white/10 max-w-2xl">
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300 font-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="h-11 bg-charcoal border-white/10 text-white placeholder:text-slate-500 focus:border-brand-blue focus:ring-brand-blue/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300 font-medium">
                    {isRealEstate ? "Email" : "Work Email"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={isRealEstate ? "you@email.com" : "john@company.com"}
                      className="h-11 bg-charcoal border-white/10 text-white placeholder:text-slate-500 focus:border-brand-blue focus:ring-brand-blue/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {isRealEstate && (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300 font-medium">Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+91 98765 43210"
                      className="h-11 bg-charcoal border-white/10 text-white placeholder:text-slate-500 focus:border-brand-blue focus:ring-brand-blue/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className={`grid grid-cols-1 ${isRealEstate ? "md:grid-cols-2" : ""} gap-6`}>
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300 font-medium">
                    {isRealEstate ? "City / Location" : "Company Name"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={isRealEstate ? "e.g. Bangalore" : "Acme Inc."}
                      className="h-11 bg-charcoal border-white/10 text-white placeholder:text-slate-500 focus:border-brand-blue focus:ring-brand-blue/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isRealEstate && (
              <FormItem>
                <FormLabel className="text-slate-300 font-medium">Property Type</FormLabel>
                <Select onValueChange={setPropertyType} value={propertyType}>
                  <SelectTrigger className="h-11 bg-charcoal border-white/10 text-white">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROPERTY_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300 font-medium">
                  {isRealEstate ? "Project description" : "How can we help?"}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={
                      isRealEstate
                        ? "e.g. 3BHK kitchen + bath remodel, ~1200 sq ft, target start date..."
                        : "What's broken in your pipeline, CRM, or follow-up process?"
                    }
                    className="min-h-[120px] bg-charcoal border-white/10 text-white placeholder:text-slate-500 focus:border-brand-blue focus:ring-brand-blue/20 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isPending}
            className={`w-full h-12 font-semibold text-lg shadow-lg transition-all ${submitClass}`}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              submitLabel
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
