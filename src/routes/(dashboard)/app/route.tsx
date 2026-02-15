import Header from '@/components/header'
import Navigation from '@/components/Navigation'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/app')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="h-screen overflow-x-hidden">
      <div className="flex flex-col-reverse sm:flex-row">
        <Navigation />
        <div className="w-full">
          <Header username="gourav" />
          <div className="p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
