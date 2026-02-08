import type { TCard } from "@/types"

export const getCardBrandLogoByName = (
  brandName: TCard["cardBrand"],
): string => {
  switch (brandName.toLowerCase()) {
    case "visa":
      return "https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/mono-outline/visa.svg"
    case "mastercard":
      return "https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/mono-outline/mastercard.svg"
    case "american express":
      return "https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/mono-outline/amex.svg"
    case "discover":
      return "https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/mono-outline/discover.svg"
    default:
      return "https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/mono-outline/code-front.svg"
  }
}
