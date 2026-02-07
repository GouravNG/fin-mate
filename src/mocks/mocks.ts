import { faker } from "@faker-js/faker"
import { getRandomCategoryIdByType } from "./helpers/randomCategory"

export const mocks = {
  user: {
    getUrl: () => "https://api.example.com/summery",
    getMockData: () => {
      const total = faker.number.int({ min: 5000, max: 20000 })
      return {
        balance: faker.number.int({ min: 1000, max: 100000 }),
        spendingRate: {
          type: "increase",
          percent: faker.number.float({
            min: 1,
            max: 10,
            fractionDigits: 2,
          }),
        },

        topCategories: Array.from({ length: 5 }, () => ({
          categoryName: faker.commerce.productName(),
          categoryImgSrc: faker.image.avatarGitHub(),
        })),

        budget: {
          total,
          spent: faker.number.int({ min: 1000, max: total }),
        },
      }
    },
  },
  transactions: {
    getUrl: () => "https://api.example.com/transactions",
    getTransactions: (_page: number, limit: number) => {
      return Array.from({ length: limit }, () => {
        const type = faker.helpers.arrayElement(["expense", "income"] as const)
        return {
          id: faker.string.uuid(),
          title: faker.commerce.productName(),
          categoryId: getRandomCategoryIdByType(type),
          date: faker.date.recent().toISOString(),
          amount: faker.number.float({ min: 10, max: 1000 }).toFixed(2),
          type: type,
        }
      })
    },
  },
}
