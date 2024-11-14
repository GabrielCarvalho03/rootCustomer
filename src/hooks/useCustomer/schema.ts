import { string, z } from "zod";

export const CustomerSchema = z.object({
  name: z
    .string()
    .max(20, { message: "Nome muito longo" })
    .refine((data) => data !== "", {
      message: "Campo obrigatório!",
    })
    .refine((data) => data.length >= 3, {
      message: "Nome não pode ser curto!",
    }),

  salary: z
    .union([z.string(), z.number(), z.null()])
    .transform((data) =>
      data === null ? NaN : typeof data === "string" ? Number(data) : data
    )
    .refine((data) => !isNaN(data) && data > 0, {
      message: "Campo obrigatório!",
    }),

  companyValuation: z
    .union([z.string(), z.number(), z.null()])
    .transform((data) =>
      data === null ? NaN : typeof data === "string" ? Number(data) : data
    )
    .refine((data) => !isNaN(data) && data > 0, {
      message: "Campo obrigatório!",
    }),
});
export type DataCustomer = z.infer<typeof CustomerSchema>;
