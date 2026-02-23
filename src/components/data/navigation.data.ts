import type { TNavigation } from '@/types/component.types'
import { CreditCard, Home, Settings, Wallet } from 'lucide-react'

export const navigationData: TNavigation[] = [
  {
    title: 'navigation.home',
    icon: Home,
    href: '/app',
  },
  {
    title: 'navigation.wallet',
    icon: Wallet,
    href: '/app/wallet',
  },
  {
    title: 'navigation.cards',
    icon: CreditCard,
    href: '/app/cards',
  },
  {
    title: 'navigation.settings',
    icon: Settings,
    href: '/app/settings',
  },
]
