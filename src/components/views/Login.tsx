import LoginForm from '../forms/Login.form'
import Logo from '../Logo'
import { SSOButton, SSOButtonGroup } from '../SSO-Button'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'

type LoginType = {
  children: React.ReactNode
}

const LoginContent = ({ children }: LoginType) => {
  return <div>{children}</div>
}

const LoginFooter = ({ children }: LoginType) => {
  const { t } = useTranslation()
  return (
    <>
      {children}
      <p className="text-center text-xs text-slate-500">
        {t('login.no_account')}
        <Button variant={'link'} className="text-xs font-semibold">
          {t('login.create_account')}
        </Button>
      </p>
    </>
  )
}

const LoginHeader = ({ children }: LoginType) => {
  return <div className="flex flex-col items-center justify-center gap-2 w-full">{children}</div>
}

const LoginContainer = ({ children }: LoginType) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <div className="min-w-80 sm:min-w-96 bg-card border rounded-lg p-4 space-y-4 scale-90">
        {children}
      </div>
    </div>
  )
}

const Login = () => {
  const { t } = useTranslation()
  return (
    <LoginContainer>
      <LoginHeader>
        <Logo />
        <p className="text-2xl font-semibold">FinMate</p>
        <p className="text-slate-500 text-sm">{t('login.tagline')}</p>
      </LoginHeader>

      <LoginContent>
        <LoginForm disableSubmit={false} loginSubmitFn={(e) => console.log(e)} />
      </LoginContent>

      <LoginFooter>
        <p className="uppercase text-sm text-center text-slate-500">
          {t('login.or_continue_with')}
        </p>
        <SSOButtonGroup>
          <SSOButton
            name={t('login.google')}
            redirectURL="/app"
            className="flex-1"
            variant={'outline'}
          />
          <SSOButton
            name={t('login.apple')}
            redirectURL="/app"
            className="flex-1 bg-black hover:bg-slate-900 text-white"
            variant={'secondary'}
          />
        </SSOButtonGroup>
      </LoginFooter>
    </LoginContainer>
  )
}
export default Login
