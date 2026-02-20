import apiClient from '@/configs/axios.config'
import type { LoginFormData, SignupformDataOutput } from '@/schemas/auth.schema'
import type { AuthResponse } from '@/types'

export const loginFn = async (payload: LoginFormData) => {
  const res = await apiClient.post<AuthResponse>('/auth/login', { data: payload })
  return res.data
}

export const signupFn = async (payload: SignupformDataOutput) => {
  const res = await apiClient.post<AuthResponse>('/auth/signup', { data: payload })
  return res.data
}
