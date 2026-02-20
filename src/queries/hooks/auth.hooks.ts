import { useMutation } from '@tanstack/react-query'
import { loginFn, signupFn } from '../fn/auth.fn'
import { toast } from 'sonner'
import { AxiosError } from 'axios'
import { useUserName } from '@/store/useUser'
import { useNavigate } from '@tanstack/react-router'
import { Route } from '@/routes/(auth)/route'

export const useLogin = () => {
  const { setUserDetails } = useUserName()
  const navigate = useNavigate()
  const { redirect } = Route.useSearch()
  return useMutation({
    mutationKey: ['login'],
    mutationFn: loginFn,
    onSuccess: (data) => {
      toast.success(`Welcome back, ${data.username}!`)
      setUserDetails(data.username, data.token)
      navigate({ to: redirect || '/app', replace: true })
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.log(error)
        toast.error(`Login failed: ${error.response ? error.message : 'Something went wrong!!'}`)
      }
    },
  })
}

export const useSignup = () => {
  const { setUserDetails } = useUserName()
  const navigate = useNavigate()
  const { redirect } = Route.useSearch()
  return useMutation({
    mutationKey: ['signup'],
    mutationFn: signupFn,
    onSuccess: (data) => {
      toast.success(`Welcome, ${data.username}! Your account has been created.`)
      setUserDetails(data.username, data.token)
      navigate({ to: redirect || '/app', replace: true })
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.log(error)
        toast.error(`Signup failed: ${error.response ? error.message : 'Something went wrong!!'}`)
      }
    },
  })
}
