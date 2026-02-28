import type { TNavigation } from '@/types/component.types'
import { CreditCard, Home, Settings, Wallet } from 'lucide-react'

export const navigationData: TNavigation[] = [
  {
    title: 'navigation.home.title',
    description:'navigation.home.description',
    icon: Home,
    href: '/app/dashboard',
  },
  {
    title: 'navigation.wallet.title',
    description:'navigation.wallet.description',
    icon: Wallet,
    href: '/app/wallet',
  },
  {
    title: 'navigation.cards.title',
    description:'navigation.cards.description',
    icon: CreditCard,
    href: '/app/cards',
  },
  {
    title: 'navigation.settings.title',
    description:'navigation.settings.description',
    icon: Settings,
    href: '/app/settings',
  },
]
