import { queryOptions } from '@tanstack/react-query'
import { getSummeryFn } from '../fn/summery.fn'

export const getSummeryOptions = queryOptions({
  queryKey: ['summery'],
  queryFn: getSummeryFn,
})
