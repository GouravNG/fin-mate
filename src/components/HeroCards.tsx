import { Eye, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "./ui/avatar"
import type { THeroCard } from "@/types/component.types"

const HeroCardHeader: React.FC<Pick<THeroCard, "totalBalance">> = ({
  totalBalance,
}) => {
  return (
    <CardHeader className="flex flex-row items-start justify-between">
      <div>
        <p className="text-slate-300">Total Balance</p>
        <p className="font-bold text-4xl">${totalBalance}</p>
      </div>
      <Eye className="cursor-pointer text-slate-300" />
    </CardHeader>
  )
}

const HerocardBadgeLogic: React.FC<Pick<THeroCard, "categories">> = ({
  categories,
}) => {
  return (
    <AvatarGroup>
      {categories.slice(0, 2).map((ctg, k) => {
        return (
          <Avatar key={ctg.categoryName + k}>
            <AvatarImage src={ctg.categoryImgSrc} />
            <AvatarFallback>{ctg.categoryName.substring(2)}</AvatarFallback>
          </Avatar>
        )
      })}
      {categories.slice(2).length !== 0 && (
        <AvatarGroupCount>+{categories.slice(2).length}</AvatarGroupCount>
      )}
    </AvatarGroup>
  )
}

const HeroCardContent: React.FC<
  Pick<THeroCard, "trendPercent"> & { children: React.ReactNode }
> = ({ trendPercent, children }) => {
  return (
    <CardContent className="flex flex-col items-center justify-between gap-4 pt-2">
      <div className="w-full flex gap-2">
        <Badge className="flex bg-white/20">
          <TrendingUp />
          <span className="font-semibold"> +{trendPercent}%</span>
        </Badge>
        <p className="text-sm text-slate-300">from last month</p>
      </div>
      <div className="flex items-center justify-between w-full">
        {children}
        <Button className="bg-white text-blue-500 font-semibold hover:cursor-pointer hover:bg-white">
          View Details
        </Button>
      </div>
    </CardContent>
  )
}

const HeroCard: React.FC<THeroCard> = ({
  categories,
  totalBalance,
  trendPercent,
}) => {
  return (
    <Card className="bg-blue-500 text-white text-lg">
      <HeroCardHeader totalBalance={totalBalance} />
      <HeroCardContent trendPercent={trendPercent}>
        <HerocardBadgeLogic categories={categories} />
      </HeroCardContent>
    </Card>
  )
}
export default HeroCard
