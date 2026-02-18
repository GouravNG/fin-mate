import apiClient from '@/configs/axios.config'
import type { SummeryResponse } from '@/types'

export const getSummeryFn = async () => {
  const res = await apiClient.get<SummeryResponse>('/summary')
  const data = res.data
  return data
}
