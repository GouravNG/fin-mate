import apiClient from '@/configs/axios.config'
import type { LoginFormData } from '@/schemas/login.schema'
import type { AuthResponse } from '@/types'

export const loginFn = async (payload: LoginFormData) => {
  const res = await apiClient.post<AuthResponse>('/auth/login', { data: payload })
  return res.data
}
