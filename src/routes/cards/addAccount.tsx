import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cards/addAccount')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cards/addAccount"!</div>
}
