import {
  useBudgetUtilization,
  useGetSummery,
} from "@/queries/hooks/summery.hooks"
import HeroCard from "../HeroCards"
import BudgetCard from "../BudgetCard"
import QuickAction from "../QuickAction"

export const Home = () => {
  const { data, error, isLoading } = useGetSummery()
  const { data: budgetUtilization } = useBudgetUtilization()
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
        <BudgetCard
          budget={data.budget.total}
          utlisedBudget={data.budget.spent}
          utilizationPercent={parseInt(budgetUtilization!)}
        />
        <QuickAction />
      </>
    )
}
