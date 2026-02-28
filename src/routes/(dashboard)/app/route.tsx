import Navigation from '@/components/Navigation'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/app')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="h-screen overflow-x-hidden sm:ml-20">
      <div className="flex flex-col-reverse sm:flex-row">
        <Navigation />
        <Outlet />
      </div>
    </div>
  )
}
