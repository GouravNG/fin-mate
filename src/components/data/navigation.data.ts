import type { TNavigation } from "@/types/component.types"
import { CreditCard, Home, Settings, Wallet } from "lucide-react"

export const navigationData: TNavigation[] = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Wallet",
    icon: Wallet,
    href: "/wallet",
  },
  {
    title: "Cards",
    icon: CreditCard,
    href: "/cards",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]
