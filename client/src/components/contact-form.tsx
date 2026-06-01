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
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  GP_FORM_SUBMIT,
  GP_FORM_SUBTITLE,
  GP_FORM_TITLE,
} from "@/lib/growth-partners";

export function ContactForm() {
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
    mutate({
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone?.trim() || undefined,
      message: data.message?.trim() || undefined,
      source: "growth-partners",
    });
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-charcoal-800 p-8 rounded-2xl border border-white/10 text-center space-y-4 min-h-[320px] flex flex-col items-center justify-center"
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 bg-brand-blue/20 text-brand-blue">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white">Message received</h3>
        <p className="text-slate-400 max-w-xs mx-auto text-sm">
          Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            reset();
            form.reset();
          }}
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
        <h3 className="text-2xl font-display font-bold text-white mb-2">{GP_FORM_TITLE}</h3>
        <p className="text-slate-400 text-sm">{GP_FORM_SUBTITLE}</p>
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
                      className="h-11 bg-charcoal border-white/10 text-white placeholder:text-slate-500"
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
                  <FormLabel className="text-slate-300 font-medium">Work Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@company.com"
                      className="h-11 bg-charcoal border-white/10 text-white placeholder:text-slate-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300 font-medium">Company Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Inc."
                    className="h-11 bg-charcoal border-white/10 text-white placeholder:text-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300 font-medium">How can we help?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What's broken in your pipeline, CRM, or follow-up process?"
                    className="min-h-[120px] bg-charcoal border-white/10 text-white placeholder:text-slate-500 resize-none"
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
            className="w-full h-12 font-semibold text-lg shadow-lg bg-brand-blue hover:bg-brand-blue-dark text-white"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              GP_FORM_SUBMIT
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
