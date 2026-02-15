import apiClient from '@/configs/axios.config'
import type { SummeryResponse } from '@/types'

export const getSummeryFn = async () => {
  const res = await apiClient.get<SummeryResponse>('/summery')
  const data = res.data
  return data
}
