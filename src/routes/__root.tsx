import Navigation from "@/components/Navigation"
import { createRootRoute, Outlet } from "@tanstack/react-router"

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
