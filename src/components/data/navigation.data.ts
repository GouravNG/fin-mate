import type { TNavigation } from '@/types/component.types'
import { CreditCard, Home, Settings, Wallet } from 'lucide-react'

export const navigationData: TNavigation[] = [
  {
    title: 'Home',
    icon: Home,
    href: '/app',
  },
  {
    title: 'Wallet',
    icon: Wallet,
    href: '/',
  },
  {
    title: 'Cards',
    icon: CreditCard,
    href: '/app/cards',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/',
  },
]
