import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .max(20, { message: "Nome muito longo" })
    .refine((data) => data !== "", {
      message: "Campo obrigatório!",
    })
    .refine((data) => data.length >= 3, {
      message: "Nome não pode ser curto!",
    }),
});
export type Datauser = z.infer<typeof userSchema>;
