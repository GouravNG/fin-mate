import apiClient from "@/configs/axios.config"
import type { TransactionsResponse } from "@/types"

export const getTransactionsFn = async (page: number, limit: number) => {
  const res = await apiClient.get<TransactionsResponse>("/transactions", {
    params: { page, limit },
  })
  const data = res.data
  return data
}
