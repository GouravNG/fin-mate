import apiClient from '@/configs/axios.config'
import type { CardsResponse } from '@/types'

export const getCards = async () => {
  const res = await apiClient.get<CardsResponse>('/accounts/cards')
  return res.data
}
