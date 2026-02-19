import SignupPage from '@/components/views/Signup.page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignupPage />
}
