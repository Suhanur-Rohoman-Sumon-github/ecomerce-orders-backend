import { z } from "zod";

export const ordervalidationSchema = z.object({
  email: z.string().email("Invalid email format").trim(),
  productId: z.string(),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z.number().int().positive({ message: "Quantity must be a positive integer" })
});