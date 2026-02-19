import { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '../ui/card'
import { TEST_IDS } from '@/test/data-testid/auth.testid'
import { Mail, EyeOff, EyeIcon, Lock, User } from 'lucide-react'
import { FieldGroup, Field, FieldLabel, FieldError } from '../ui/field'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import {
  signupFormSchema,
  type SignupFormDataInput,
  type SignupformDataOutput,
} from '@/schemas/auth.schema'

const SignupForm = ({
  signupSubmitFn,
  disableSubmit,
}: {
  signupSubmitFn: SubmitHandler<SignupformDataOutput>
  disableSubmit: boolean
}) => {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()
  const form = useForm<SignupFormDataInput, unknown, SignupformDataOutput>({
    resolver: standardSchemaResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
    },
  })

  const ERROR_IDS = {
    username: 'username-error',
    email: 'email-error',
    password: 'password-error',
    confirmPassword: 'confirm-password-error',
  }

  return (
    <Card className="border-0 shadow-none py-4">
      <CardContent>
        <form onSubmit={form.handleSubmit(signupSubmitFn)} data-testid={TEST_IDS.form}>
          <FieldGroup className="gap-3">
            {/* USERNAME */}
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel className="text-xs">{t('', 'Username')}</FieldLabel>
                  <div className="relative">
                    <span className="absolute top-0 left-0 h-full flex items-center">
                      <User className="w-8 p-1" />
                    </span>
                    <Input
                      {...field}
                      type="text"
                      placeholder={t('', 'enter your unique username')}
                      className="pl-8 placeholder:text-slate-500"
                      data-testid={TEST_IDS.nameInput}
                      aria-describedby={fieldState.error ? ERROR_IDS.username : undefined}
                      aria-invalid={!!fieldState.error}
                      autoFocus
                    />
                  </div>
                  {fieldState.error && (
                    <FieldError
                      id={ERROR_IDS.username}
                      errors={[fieldState.error]}
                      data-testid={TEST_IDS.nameError}
                    />
                  )}
                </Field>
              )}
            />
            {/* USER EMAIL */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel className="text-xs">{t('', 'Email')}</FieldLabel>
                  <div className="relative">
                    <span className="absolute top-0 left-0 h-full flex items-center">
                      <Mail className="w-8 p-1" />
                    </span>
                    <Input
                      {...field}
                      type="email"
                      placeholder={t('', 'enter your email')}
                      className="pl-8 placeholder:text-slate-500"
                      data-testid={TEST_IDS.emailInput}
                      aria-describedby={fieldState.error ? ERROR_IDS.email : undefined}
                      aria-invalid={!!fieldState.error}
                    />
                  </div>
                  {fieldState.error && (
                    <FieldError
                      id={ERROR_IDS.email}
                      errors={[fieldState.error]}
                      data-testid={TEST_IDS.emailError}
                    />
                  )}
                </Field>
              )}
            />

            {/* USER PASSWORD */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel className="text-xs">{t('', 'Password')}</FieldLabel>
                  <div className="relative">
                    <span className="absolute top-0 left-0 h-full flex items-center">
                      <Lock className="w-8 p-1" />
                    </span>
                    <Input
                      {...field}
                      placeholder={t('', 'enter your password')}
                      className="pl-8 placeholder:text-slate-500"
                      data-testid={TEST_IDS.passwordInput}
                      type={show ? 'text' : 'password'}
                      aria-describedby={fieldState.error ? ERROR_IDS.password : undefined}
                      aria-invalid={!!fieldState.error}
                    />
                    <Button
                      type="button"
                      variant={'ghost'}
                      aria-label={t('', 'toggle password visibility')}
                      onClick={() => setShow(!show)}
                      data-testid={TEST_IDS.passwordToggle}
                      className="absolute top-0 right-0 hover:bg-white"
                    >
                      {show ? <EyeOff /> : <EyeIcon />}
                    </Button>
                  </div>
                  {fieldState.error && (
                    <FieldError
                      id={ERROR_IDS.password}
                      errors={[fieldState.error]}
                      data-testid={TEST_IDS.passwordError}
                    />
                  )}
                </Field>
              )}
            />
            {/* CONFIRM PASSWORD */}
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel className="text-xs">{t('', 'Confirm Password')}</FieldLabel>
                  <div className="relative">
                    <span className="absolute top-0 left-0 h-full flex items-center">
                      <Lock className="w-8 p-1" />
                    </span>
                    <Input
                      {...field}
                      placeholder={t('', 're-enter your password')}
                      className="pl-8 placeholder:text-slate-500"
                      data-testid={TEST_IDS.confirmPasswordInput}
                      type={show ? 'text' : 'password'}
                      aria-describedby={fieldState.error ? ERROR_IDS.confirmPassword : undefined}
                      aria-invalid={!!fieldState.error}
                    />
                    <Button
                      variant={'ghost'}
                      aria-label={t('', 'toggle password visibility')}
                      data-testid={TEST_IDS.confirmPasswordToggle}
                      type="button"
                      onClick={() => setShow(!show)}
                      className="absolute top-0 right-0 hover:bg-white"
                    >
                      {show ? <EyeOff /> : <EyeIcon />}
                    </Button>
                  </div>
                  {fieldState.error && (
                    <FieldError
                      id={ERROR_IDS.confirmPassword}
                      errors={[fieldState.error]}
                      data-testid={TEST_IDS.confirmPasswordError}
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <div className="py-4">
            <Button
              type="submit"
              data-testid={TEST_IDS.submitButton}
              disabled={disableSubmit}
              className="w-full p-6"
            >
              {t('', 'Signup')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignupForm
