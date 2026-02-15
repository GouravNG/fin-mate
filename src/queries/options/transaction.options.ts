import { queryOptions } from '@tanstack/react-query'
import { getTransactionsFn } from '../fn/Transactions'

export const transactionOptions = (page = 1, limit = 10) =>
  queryOptions({
    queryKey: ['transaction', page, limit],
    queryFn: () => getTransactionsFn(page, limit),
  })
