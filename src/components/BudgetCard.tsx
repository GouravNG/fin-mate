import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Progress } from "./ui/progress"

type TBudget = {
  budget: number
  utlisedBudget: number
  utilizationPercent: number
}

const BudgetCard: React.FC<TBudget> = ({
  budget,
  utlisedBudget,
  utilizationPercent,
}) => {
  return (
    <>
      <Card className="my-2 bg-slate-50">
        <div>
          <CardHeader className="flex items-start justify-between">
            <div>
              <CardTitle className="font-bold">Montly Spend</CardTitle>
              <CardDescription className="text-xs/loose">
                Budget: ${budget}
              </CardDescription>
            </div>
            <div>
              <span className="text-2xl font-semibold text-blue-500">
                ${budget}
              </span>
            </div>
          </CardHeader>
        </div>
        <CardContent>
          <Progress value={utilizationPercent} />
        </CardContent>
        <CardFooter className="flex items-center justify-between text-xs">
          <div>{utilizationPercent}% of the budget used</div>
          <div>${budget - utlisedBudget} left</div>
        </CardFooter>
      </Card>
    </>
  )
}
export default BudgetCard
