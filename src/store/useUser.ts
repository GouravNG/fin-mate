import { create } from 'zustand'
import { persist, combine } from 'zustand/middleware'
import { useShallow } from 'zustand/shallow'

type TUser = {
  theme: 'light' | 'dark'
  userName: string | null
  userToken: string | null
}

const user: TUser = {
  theme: 'light',
  userName: null,
  userToken: null,
}

const useUserStore = create(
  persist(
    combine(user, (set) => ({
      setUserDetails: (userName: string, userToken: string) => set({ userName, userToken }),
    })),
    {
      name: 'user-store',
    },
  ),
)

export const useUserName = () =>
  useUserStore(useShallow(({ userName, setUserDetails }) => ({ userName, setUserDetails })))
export const useUserToken = () =>
  useUserStore(useShallow(({ userToken, setUserDetails }) => ({ userToken, setUserDetails })))
