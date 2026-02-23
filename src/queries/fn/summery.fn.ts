import apiClient from '@/configs/axios.config'
import type { ProfileResponse, SummeryResponse } from '@/types'

export const getSummeryFn = async () => {
  const res = await apiClient.get<SummeryResponse>('/summary')
  const data = res.data
  return data
}

export const getProfieDetailsFn = async () => {
  const res = await apiClient.get<ProfileResponse>('user/profile')
  const data = res.data
  return data
}
