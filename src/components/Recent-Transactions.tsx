import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { BadgeDollarSign, Ellipsis } from 'lucide-react'
import { Button } from './ui/button'
import { useGetTransactions } from '@/queries/hooks/transactions.hooks'
import type { TransactionsResponse } from '@/types'
import { getCategoryNameByCategoryId } from '@/utils/getCategoryNameByCategoryid'
import { getIconByCategoryId } from '@/utils/getIconsByCategoryid'
import { getEasyDate } from '@/utils/getEasyDate'
import { Separator } from './ui/separator'

const Transactions: React.FC<TransactionsResponse[0]> = ({
  amount,
  categoryId,
  date,
  title,
  type,
}) => {
  const categoryName = getCategoryNameByCategoryId(categoryId)
  const categoryIconData = getIconByCategoryId(categoryId)

  return (
    <>
      <div className="flex items-center justify-between text-xs sm:text-sm sm:space-x-4">
        <div className="p-2">
          <div className="bg-orange-200 p-2 border-0 rounded-full">
            {categoryIconData && categoryIconData.icon ? (
              <categoryIconData.icon className="text-orange-600" />
            ) : (
              <BadgeDollarSign />
            )}
          </div>
        </div>
        <div className="flex-2 flex flex-col items-start justify-start">
          <div className="font-semibold textbase">{title}</div>
          <div className="flex text-slate-600">
            <p className="pr-1 text-nowrap whitespace-nowrap">{categoryName}</p>
            <p className="text-red-500 font-extrabold">-</p>
            <p className="pl-1 text-nowrap whitespace-nowrap">{getEasyDate(date)}</p>
          </div>
        </div>
        <div
          className={`flex-1 text-right font-bold ${type === 'income' ? 'text-green-400' : 'text-slate-950'}`}
        >
          {type === 'income' ? '+' : '-'}${amount}
        </div>
        <div className="hidden md:block">
          <Button variant={'ghost'} className="hover:cursor-pointer">
            View More
          </Button>
        </div>
        <div className="hidden md:block">
          <Button variant={'ghost'} className="hover:cursor-pointer">
            <Ellipsis />
          </Button>
        </div>
      </div>
      <Separator className="bg-slate-100" />
    </>
  )
}

export const RecentTransactions = () => {
  const { data, isLoading, isError } = useGetTransactions(1, 10)

  if (isLoading) return <p>Loading..</p>
  if (isError) return <p>Something went wrong!!</p>
  if (data === undefined || data.length == 0) <p>No Transactions Found</p>
  else
    return (
      <>
        <Card className="shadow-none border-none">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-semibold text-lg">Recent Transactions</CardTitle>
              <Link to="/">
                <p className="text-sm text-blue-500 font-semibold">See All</p>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.map((i) => {
              return <Transactions {...i} key={i.id} />
            })}
            <div className="flex">
              <Button className="p-2 mb-14 sm:mb-2 w-full sm:m-auto sm:max-w-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold">
                View More
              </Button>
            </div>
          </CardContent>
        </Card>
      </>
    )
}
