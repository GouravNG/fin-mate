import { CardAndAccounts } from "@/components/views/Card"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/cards/")({
  component: CardAndAccounts,
})
