import type { TBankAccount } from '@/types'
import { userPreferenceOptions } from './userPreferenceOptions'

export const getRandomGradient = () => {
  const gradients = Object.values(userPreferenceOptions.gradients)
  return gradients[Math.floor(Math.random() * gradients.length)]
}

export const getBankIconPreference = (): TBankAccount['icon'] => {
  const preferenceId = Math.floor(Math.random() * 10)
  const colors=Object.values(userPreferenceOptions.colors)
  const icons=Object.values(userPreferenceOptions.icons)
  return {
    icon: icons[preferenceId],
    background: colors[preferenceId].background,
    foreground: colors[preferenceId].foreground,
  }
}
