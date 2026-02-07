import { categoriesData } from "@/components/data/categories.data"
// import { BadgeDollarSign } from "lucide-react"

export const getIconByCategoryId = (categoryId: string) => {
  const categoryIconData = categoriesData.find(({ id }) => id === categoryId)
  return categoryIconData
}
