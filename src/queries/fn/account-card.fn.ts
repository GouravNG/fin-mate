import apiClient from '@/configs/axios.config'
import type { CardsResponse, BankAccountResponse } from '@/types'

export const getCards = async () => {
  const res = await apiClient.get<CardsResponse>('/accounts/cards')
  return res.data
}

export const getBankAccountDetails = async () => {
  const res = await apiClient.get<BankAccountResponse>('/accounts/banks')
  return res.data
}
