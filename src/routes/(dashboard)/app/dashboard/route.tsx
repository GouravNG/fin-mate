import Header from '@/components/header'
import { useGetProfileDetails } from '@/queries/hooks/summery.hooks'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/app/dashboard')({
  component: AuthLayout,
})

function AuthLayout() {
  const { data } = useGetProfileDetails()
  return (
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
  )
}
