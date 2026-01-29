import { useGetSummery } from "@/queries/hooks/summery.hooks"
import HeroCard from "../HeroCards"

export const Home = () => {
  const { data, error, isLoading } = useGetSummery()
  if (isLoading) return <h1>Loading..</h1>
  if (error) return <h1>Something went wrong!!</h1>
  if (data !== undefined)
    return (
      <>
        <HeroCard
          totalBalance={data.balance}
          trendPercent={data.spendingRate.percent}
          categories={data.topCategories}
        />
      </>
    )
}
