import { categoriesData } from "@/components/data/categories.data"
import { faker } from "@faker-js/faker"

export const getRandomCategoryIdByType = (
  type: "expense" | "income",
): string => {
  const filtered = categoriesData.filter((category) => category.type === type)

  return faker.helpers.arrayElement(filtered).id
}
