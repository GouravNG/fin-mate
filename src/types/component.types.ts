import type { LucideIcon } from 'lucide-react'
import type { CardsResponse } from './api.types'
import type { FileRoutesByTo } from '@/routeTree.gen'

export type TNavigation = {
  title: string
  description: string
  icon: LucideIcon
  href: keyof FileRoutesByTo
}

export type THeroCard = {
  totalBalance: number
  trendPercent: number
  categories: {
    categoryName: string
    categoryImgSrc: string
  }[]
}

export type TCard = CardsResponse[0]

export type THeader = {
  username: string
  avatar: string | undefined
  userNameShortForm: string
  notifications: string[]
}

export type TDynamicHeader = {
  title: string
  description?: string
  backFn: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  utilityIcon?: LucideIcon
  utilityFn?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: React.ReactNode
}
