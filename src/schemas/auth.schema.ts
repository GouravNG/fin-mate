import z from 'zod'

const loginFormSchema = z.object({
  email: z.email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export type LoginFormData = z.infer<typeof loginFormSchema>
export default loginFormSchema

export const signupFormSchema = z.object({
  username: z
    .string()
    .min(2, 'Username must be at least 2 characters long')
    .max(20, 'Username must be at most 20 characters long'),
  email: z.email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export type SignupFormData = z.infer<typeof signupFormSchema>
