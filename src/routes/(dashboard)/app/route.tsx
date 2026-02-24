import Header from '@/components/header'
import Navigation from '@/components/Navigation'
import { useGetProfileDetails } from '@/queries/hooks/summery.hooks'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/app')({
  component: AuthLayout,
})

function AuthLayout() {
  const { data } = useGetProfileDetails()
  return (
    <div className="h-screen overflow-x-hidden sm:ml-20">
      <div className="flex flex-col-reverse sm:flex-row">
        <Navigation />
        <div className="w-full">
          {data && (
            <Header
              avatar={data.avatar}
              userNameShortForm={data.usernameShortForm}
              username={data.username}
              notifications={[]}
            />
          )}
          <div className="p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
