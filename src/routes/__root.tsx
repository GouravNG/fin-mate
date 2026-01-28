import Header from "@/components/header"
import Navigation from "@/components/Navigation"
import { createRootRoute, Outlet } from "@tanstack/react-router"

const RootLayout = () => {
  return (
    <div className="h-screen">
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

export const Route = createRootRoute({
  component: RootLayout,
})
