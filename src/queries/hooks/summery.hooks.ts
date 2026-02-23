import { useQuery } from '@tanstack/react-query'
import { getProfileDetailsOptions, getSummeryOptions } from '../options/summery.options'

export const useGetSummery = () => useQuery(getSummeryOptions)
export const useBudgetUtilization = () =>
  useQuery({
    ...getSummeryOptions,
    select: (data) => ((data.budget.spent / data.budget.total) * 100).toPrecision(3),
  })

export const useGetProfileDetails = () =>
  useQuery({
    ...getProfileDetailsOptions,
    select: (data) => ({
      username: data.username,
      usernameShortForm: data.username.slice(0, 2).toUpperCase(),
      avatar: data.avatar as string | undefined,
    }),
  })
