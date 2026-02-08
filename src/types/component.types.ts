import type { LucideIcon } from "lucide-react"
import type { CardsResponse } from "./api.types"

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

export type TCard = CardsResponse[0]
