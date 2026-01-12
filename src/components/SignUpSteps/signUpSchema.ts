import z from "zod";

export const signUpSchema = z.object({
  goal: z.enum(['lose', 'maintain', 'gain']),
  gender: z.enum(['male', 'female']),
  birthDate: z.string().min(1, "Informe sua data de nascimento"),
  weight: z.string().min(1, "Informe seu peso"),
  height: z.string().min(1, "Informe sua altura"),
  activityLevel: z.string(),
  name: z.string().min(1, "Informe seu nome"),
  email: z.string("Informe um e-mail válido"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;