import { queryOptions } from '@tanstack/react-query'
import { getBankAccountDetails, getCards } from '../fn/account-card.fn'

export const cardOptions = queryOptions({
  queryKey: ['cards'],
  queryFn: getCards,
})

export const bankAccountOptions = queryOptions({
  queryKey: ['bankAccountDetails'],
  queryFn: getBankAccountDetails,
})