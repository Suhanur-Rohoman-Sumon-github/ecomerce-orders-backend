import { z } from "zod";

export const orderSchema = z.object({
  email: z.string().email("Invalid email format").trim(),
  productId: z.string().uuid("Invalid product ID format"),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z.number().int().positive({ message: "Quantity must be a positive integer" })
});