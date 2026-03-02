import { userPreferenceOptions } from "./userPreferenceOptions"

export const getRandomGradient = () => {
  const gradients = Object.values(userPreferenceOptions.gradients)
  return gradients[Math.floor(Math.random() * gradients.length)]
}
