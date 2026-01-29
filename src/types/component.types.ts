import type { LucideIcon } from "lucide-react"

export type TNavigation = {
  title: string
  icon: LucideIcon
  href: string
}

export type THeroCard = {
  totalBalance: number
  trendPercent: number
  categories: {
    categoryName: string
    categoryImgSrc: string
  }[]
}
