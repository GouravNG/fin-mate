import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { useUserToken } from '@/store/useUser'
import { Toaster } from '@/components/ui/sonner'

const RootLayout = () => {
  return (
    <>
      <div className="font-pop-regular">
        <Outlet />
      </div>
      <Toaster richColors position="top-right" />
    </>
  )
}

export const Route = createRootRouteWithContext<{ auth: ReturnType<typeof useUserToken> }>()({
  component: RootLayout,
})
