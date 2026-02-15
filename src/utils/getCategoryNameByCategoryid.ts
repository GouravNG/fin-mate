import { categoriesData } from '@/components/data/categories.data'

export const getCategoryNameByCategoryId = (categoryId: string) => {
  const category = categoriesData.find(({ id }) => id === categoryId)
  return category ? category.title : 'Unknown Category'
}
