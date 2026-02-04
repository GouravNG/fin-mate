import { useQuery } from "@tanstack/react-query"
import { transactionOptions } from "../options/transaction.options"

export const useGetTransactions = (page: number, limit: number) => {
  return useQuery(transactionOptions(page, limit))
}

export const useGetTransactionsCount = () => {
  return useQuery({
    ...transactionOptions(),
    select: (data) => data.length,
  })
}
