import { faker } from '@faker-js/faker'
import { getRandomCategoryIdByType } from './helpers/randomCategory'

export const mocks = {
  user: {
    getUrl: () => 'https://api.example.com/summery',
    getMockData: () => {
      const total = faker.number.int({ min: 5000, max: 20000 })
      return {
        balance: faker.number.int({ min: 1000, max: 100000 }),
        spendingRate: {
          type: 'increase',
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
    getUrl: () => 'https://api.example.com/transactions',
    getTransactions: (_page: number, limit: number) => {
      return Array.from({ length: limit }, () => {
        const type = faker.helpers.arrayElement(['expense', 'income'] as const)
        return {
          id: faker.number.int({ min: 1, max: 20 }),
          title: faker.commerce.productName(),
          categoryId: getRandomCategoryIdByType(type),
          date: faker.date.recent().toISOString(),
          amount: faker.number.float({ min: 10, max: 1000 }).toFixed(2),
          type: type,
        }
      })
    },
  },
  accounts: {
    cards: {
      getUrl: () => 'https://api.example.com/accounts/cards',
      getMockData: () => {
        return Array.from({ length: 3 }, () => ({
          id: faker.number.int({ min: 1, max: 20 }),
          cardTitle: faker.finance.accountName(),
          transaction: faker.number.float({ min: 1000, max: 10000 }).toFixed(2),
          cardtype: faker.helpers.arrayElement(['credit', 'debit'] as const),
          cardNumber: faker.finance.creditCardNumber('63[7-9]#-####-####-###L'),
          expiryDate: (() => {
            const d = faker.date.future().toISOString()
            return d.slice(5, 7) + '/' + d.slice(2, 4)
          })(), // MM/YY
          cardHolderName: faker.person.fullName(),
          cardBrand: faker.helpers.arrayElement([
            'Visa',
            'MasterCard',
            'American Express',
            'Discover',
          ] as const),
        }))
      },
    },
  },
}
