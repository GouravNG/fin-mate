import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { quickActions } from "./data/quickaction.data"
import { useIsMobile } from "@/hooks/use-mobile"
import { Ellipsis } from "lucide-react"

const QuickAction = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          {quickActions.slice(0, isMobile ? 3 : 6).map((qa, k) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
                key={qa.title + k}
              >
                <Button className="w-14 h-14 bg-blue-100 hover:cursor-pointer hover:bg-blue-200">
                  <qa.icon className="text-blue-700" />
                </Button>
                <span className="text-sm font-semibold">{qa.title}</span>
              </div>
            )
          })}
          <div className="flex flex-col items-center justify-center">
            <Button className="w-14 h-14 bg-blue-100 hover:cursor-pointer hover:bg-blue-200">
              <Ellipsis className="text-blue-700" />
            </Button>
            <span className="text-sm font-semibold">More</span>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
export default QuickAction
