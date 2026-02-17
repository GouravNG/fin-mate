import { Card, CardContent } from '../ui/card'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import loginFormSchema, { type LoginFormData } from '@/schemas/login.schema'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { EyeIcon, EyeOff, Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LoginForm = ({
  loginSubmitFn,
  disableSubmit,
}: {
  loginSubmitFn: SubmitHandler<LoginFormData>
  disableSubmit: boolean
}) => {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()
  const form = useForm<LoginFormData>({
    resolver: standardSchemaResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <>
      <Card className="border-0 shadow-none">
        <CardContent>
          <form onSubmit={form.handleSubmit(loginSubmitFn)}>
            <FieldGroup>
              {/* USER EMAIL */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel className="text-xs">{t('login.email_address')}</FieldLabel>
                    <div className="relative">
                      <span className="absolute top-0 left-0 h-full flex items-center">
                        <Mail className="w-8 p-1" />
                      </span>
                      <Input
                        {...field}
                        type="email"
                        placeholder={t('login.email_placeholder')}
                        className="pl-8"
                        autoFocus
                      />
                    </div>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              {/* USER PASSWORD */}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel className="text-xs">{t('login.password')}</FieldLabel>
                    <div className="relative">
                      <span className="absolute top-0 left-0 h-full flex items-center">
                        <Lock className="w-8 p-1" />
                      </span>
                      <Input
                        {...field}
                        placeholder={t('login.password_placeholder')}
                        className="pl-8"
                        type={show ? 'text' : 'password'}
                      />
                      <Button
                        variant={'ghost'}
                        aria-label={t('login.toggle_password')}
                        type="button"
                        onClick={() => setShow(!show)}
                        className="absolute top-0 right-0 hover:bg-white"
                      >
                        {show ? <EyeOff /> : <EyeIcon />}
                      </Button>
                    </div>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    <FieldDescription className="flex">
                      <Button variant={'link'} className="text-sm ml-auto text-blue-800" asChild>
                        <a href="#">{t('login.forgot_password')}</a>
                      </Button>
                    </FieldDescription>
                  </Field>
                )}
              />
            </FieldGroup>
            <Button type="submit" disabled={disableSubmit} className="w-full p-6">
              {t('login.login_button')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
export default LoginForm
