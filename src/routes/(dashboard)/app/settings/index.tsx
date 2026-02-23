import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/app/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(dashboard)/app/settings/"!</div>
}
