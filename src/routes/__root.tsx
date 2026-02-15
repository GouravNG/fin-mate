import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => {
  return (
    <div className="font-pop-regular">
      <Outlet />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
