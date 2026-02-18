import { routeTree } from '@/routeTree.gen'
import { useUserToken } from '@/store/useUser'
import { createRouter, RouterProvider } from '@tanstack/react-router'

const router = createRouter({ routeTree, context: { auth: undefined! } })

export const AuthRouterProvider = () => {
  const auth = useUserToken()
  return <RouterProvider router={router} context={{ auth }} />
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
