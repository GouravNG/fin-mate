import { useQuery } from '@tanstack/react-query'
import { getSummeryOptions } from '../options/summery.options'

export const useGetSummery = () => useQuery(getSummeryOptions)
export const useBudgetUtilization = () =>
  useQuery({
    ...getSummeryOptions,
    select: (data) => ((data.budget.spent / data.budget.total) * 100).toPrecision(3),
  })
