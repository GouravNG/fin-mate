import { useTranslation } from 'react-i18next'
import { SSOButton, SSOButtonGroup } from './SSO-Button'

type AuthType = {
  children: React.ReactNode
}

export const AuthContent = ({ children }: AuthType) => {
  return <div>{children}</div>
}

export const AuthFooter = ({ children }: AuthType) => {
  const { t } = useTranslation()
  return (
    <>
      <p className="uppercase text-sm text-center text-slate-500">{t('login.or_continue_with')}</p>
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
      {children}
    </>
  )
}

export const AuthHeader = ({ children }: AuthType) => {
  return <div className="flex flex-col items-center justify-center gap-2 w-full">{children}</div>
}

export const AuthContainer = ({ children }: AuthType) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <div className="min-w-80 sm:min-w-96 bg-card border rounded-lg p-4 space-y-4 scale-90">
        {children}
      </div>
    </div>
  )
}
