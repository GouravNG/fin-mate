import * as z from "zod"

const loginFormSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

export type LoginFormData = z.infer<typeof loginFormSchema>
export default loginFormSchema
