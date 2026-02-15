import { queryOptions } from '@tanstack/react-query'
import { getCards } from '../fn/account-card.fn'

export const cardOptions = queryOptions({
  queryKey: ['cards'],
  queryFn: getCards,
})
