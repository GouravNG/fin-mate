import Logo from '../Logo'
import { Button } from '../ui/button'
import SignupForm from '../forms/Signup.form'
import { useTranslation } from 'react-i18next'
import { AuthContainer, AuthContent, AuthFooter, AuthHeader } from '../AuthContainer'

const SignupPage = () => {
  const { t } = useTranslation()
  return (
    <AuthContainer>
      <AuthHeader>
        <Logo />
        <p className="text-2xl font-semibold">FinMate</p>
        <p className="text-slate-500 text-sm">{t('login.tagline')}</p>
      </AuthHeader>

      <AuthContent>
        <SignupForm disableSubmit={false} signupSubmitFn={(e) => console.log(e)} />
      </AuthContent>

      <AuthFooter>
        <p className="text-center text-xs text-slate-500">
          {t('', 'Already have account?')}
          <Button variant={'link'} className="text-xs font-semibold">
            {t('', 'Login')}
          </Button>
        </p>
      </AuthFooter>
    </AuthContainer>
  )
}
export default SignupPage
