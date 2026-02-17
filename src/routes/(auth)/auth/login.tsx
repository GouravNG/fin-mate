import Login from '@/components/views/Login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/auth/login')({
  component: Login,
})

