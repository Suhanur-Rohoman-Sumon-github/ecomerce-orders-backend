import { z } from 'zod';

export const zodValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(255, 'Name is too long'),
  description: z
    .string()
    .trim()
    .min(10, 'Description is too short')
    .max(1000, 'Description is too long'),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z
    .string()
    .trim()
    .min(1, 'Category is required')
    .max(50, 'Category is too long'),
  tags: z
    .array(z.string().trim().min(1, 'Tag is required'))
    .nonempty('At least one tag is required'),
  variants: z.array(
    z.object({
      type: z
        .string()
        .trim()
        .min(1, 'Variant type is required')
        .max(50, 'Variant type is too long'),
      value: z
        .string()
        .trim()
        .min(1, 'Variant value is required')
        .max(50, 'Variant value is too long'),
    }),
  ),
  inventory: z.object({
    quantity: z
      .number()
      .int()
      .positive({ message: 'Quantity must be a positive integer' }),
    inStock: z.boolean(),
  }),
});

export const updateProductSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, 'Name is required')
      .max(255, 'Name is too long')
      .optional(),
    description: z
      .string()
      .trim()
      .min(10, 'Description is too short')
      .max(1000, 'Description is too long')
      .optional(),
    price: z
      .number()
      .positive({ message: 'Price must be a positive number' })
      .optional(),
    category: z
      .string()
      .trim()
      .min(1, 'Category is required')
      .max(50, 'Category is too long')
      .optional(),
    tags: z
      .array(z.string().trim().min(1, 'Tag is required'))
      .nonempty('At least one tag is required')
      .optional(),
    variants: z
      .array(
        z.object({
          type: z
            .string()
            .trim()
            .min(1, 'Variant type is required')
            .max(50, 'Variant type is too long'),
          value: z
            .string()
            .trim()
            .min(1, 'Variant value is required')
            .max(50, 'Variant value is too long'),
        }),
      )
      .optional(),
    inventory: z
      .object({
        quantity: z
          .number()
          .int()
          .positive({ message: 'Quantity must be a positive integer' })
          .optional(),
        inStock: z.boolean().optional(),
      })
      .optional(),
  });