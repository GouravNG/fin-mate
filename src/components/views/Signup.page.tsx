import Logo from '../Logo'
import { Button } from '../ui/button'
import SignupForm from '../forms/Signup.form'
import { useTranslation } from 'react-i18next'
import { AuthContainer, AuthContent, AuthFooter, AuthHeader } from '../AuthContainer'
import { useSignup } from '@/queries/hooks/auth.hooks'
import { Link } from '@tanstack/react-router'

const SignupPage = () => {
  const { t } = useTranslation()
  const { mutate, isPending } = useSignup()
  return (
    <AuthContainer>
      <AuthHeader>
        <Logo />
        <p className="text-2xl font-semibold font-heading">FinMate.</p>
        <p className="text-muted-foreground text-sm">{t('signup.tagline')}</p>
      </AuthHeader>

      <AuthContent>
        <SignupForm disableSubmit={isPending} signupSubmitFn={(e) => mutate(e)} />
      </AuthContent>

      <AuthFooter>
        <p className="text-center text-xs text-muted-foreground">
          {t('signup.already_have_account')}
          <Button variant={'link'} className="text-xs font-semibold" asChild>
            <Link to="/auth/login">{t('signup.login')}</Link>
          </Button>
        </p>
      </AuthFooter>
    </AuthContainer>
  )
}
export default SignupPage
