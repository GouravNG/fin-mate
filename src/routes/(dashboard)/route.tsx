import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)')({
  component: RouteComponent,
  beforeLoad:({context,location})=>{
    if(!context.auth.userToken ){
      throw redirect({
        to:"/auth/login",
        search:{
          redirect:location.href
        }
      })
    }
  }
})

function RouteComponent() {
  return <Outlet />
}
