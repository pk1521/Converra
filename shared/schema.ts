import { z } from "zod";

export const insertLeadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email is required"),
  company: z.string().min(1, "This field is required"),
  phone: z.string().optional(),
  message: z.string().optional(),
  source: z.enum(["growth-partners", "real-estate", "realty-partners", "renovation"]).optional(),
});

export const leadSchema = insertLeadSchema.extend({
  id: z.number(),
  createdAt: z.string(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = z.infer<typeof leadSchema>;
