import { Home } from '@/components/views/Home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/app/')({
  component: Home,
})
