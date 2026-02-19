import Logo from '../Logo'
import { Button } from '../ui/button'
import LoginForm from '../forms/Login.form'
import { useTranslation } from 'react-i18next'
import { useLogin } from '@/queries/hooks/auth.hooks'
import { AuthContainer, AuthContent, AuthFooter, AuthHeader } from '../AuthContainer'

const Login = () => {
  const { t } = useTranslation()
  const { mutate, isPending } = useLogin()
  return (
    <AuthContainer>
      <AuthHeader>
        <Logo />
        <p className="text-2xl font-semibold">FinMate</p>
        <p className="text-slate-500 text-sm">{t('login.tagline')}</p>
      </AuthHeader>

      <AuthContent>
        <LoginForm disableSubmit={isPending} loginSubmitFn={(e) => mutate(e)} />
      </AuthContent>

      <AuthFooter>
        <p className="text-center text-xs text-slate-500">
          {t('login.no_account')}
          <Button variant={'link'} className="text-xs font-semibold">
            {t('login.create_account')}
          </Button>
        </p>
      </AuthFooter>
    </AuthContainer>
  )
}
export default Login
