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

export function ContactForm() {
  const { mutate, isPending, isSuccess } = useCreateLead();
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: InsertLead) {
    mutate(data);
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-charcoal-800 p-8 rounded-2xl border border-white/10 text-center space-y-4 min-h-[320px] flex flex-col items-center justify-center"
      >
        <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white">Message Received</h3>
        <p className="text-slate-400 max-w-xs mx-auto text-sm">
          Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => window.location.reload()}
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
        <h3 className="text-2xl font-display font-bold text-white mb-2">Book A Strategy Call</h3>
        <p className="text-slate-400 text-sm">
          Tell us about your revenue systems challenges. We&apos;ll respond with next steps.
        </p>
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
                      placeholder="John Doe"
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
                  <FormLabel className="text-slate-300 font-medium">Work Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@company.com"
                      className="h-11 bg-charcoal border-white/10 text-white placeholder:text-slate-500 focus:border-brand-blue focus:ring-brand-blue/20"
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300 font-medium">How can we help?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your GTM stack, CRM setup, and growth goals..."
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
            className="w-full h-12 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-lg shadow-lg shadow-brand-blue/25 transition-all"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Book Strategy Call"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
