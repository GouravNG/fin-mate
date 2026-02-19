import z from 'zod/v4'

const loginFormSchema = z.object({
  email: z.email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export type LoginFormData = z.infer<typeof loginFormSchema>
export default loginFormSchema

export const signupFormSchema = z
  .object({
    username: z
      .string()
      .min(2, 'Username must be at least 2 characters long')
      .max(20, 'Username must be at most 20 characters long'),
    email: z.email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .transform(({ confirmPassword, ...rest }) => rest)

export type SignupFormDataInput = z.input<typeof signupFormSchema>
export type SignupformDataOutput = z.output<typeof signupFormSchema>
