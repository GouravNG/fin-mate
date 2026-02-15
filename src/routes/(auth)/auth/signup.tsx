import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(auth)/auth/signup"!</div>
}
