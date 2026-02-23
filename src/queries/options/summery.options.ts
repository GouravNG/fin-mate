import { queryOptions } from '@tanstack/react-query'
import { getProfieDetailsFn, getSummeryFn } from '../fn/summery.fn'

export const getSummeryOptions = queryOptions({
  queryKey: ['summery'],
  queryFn: getSummeryFn,
})

export const getProfileDetailsOptions = queryOptions({
  queryKey: ['profileDetails'],
  queryFn: getProfieDetailsFn,
})
