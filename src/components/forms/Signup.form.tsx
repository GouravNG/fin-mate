import type { SignupFormData } from '@/schemas/auth.schema'
import type { SubmitHandler } from 'react-hook-form'

const SignupForm = ({
  signupSubmitFn,
  disableSubmit,
}: {
  signupSubmitFn: SubmitHandler<SignupFormData>
  disableSubmit: boolean
}) => {
  return <form onSubmit={() => signupSubmitFn}>{disableSubmit}</form>
}
export default SignupForm
