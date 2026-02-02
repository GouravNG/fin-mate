import { faker } from "@faker-js/faker"

export const mocks = {
  user: {
    getUrl: () => "https://api.example.com/summery",
    getMockData: () => {
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
        topCategories: faker.helpers.arrayElements([
          {
            categoryName: faker.commerce.productName(),
            categoryImgSrc: faker.image.avatarGitHub(),
          },
          {
            categoryName: faker.commerce.productName(),
            categoryImgSrc: faker.image.avatarGitHub(),
          },
          {
            categoryName: faker.commerce.productName(),
            categoryImgSrc: faker.image.avatarGitHub(),
          },
          {
            categoryName: faker.commerce.productName(),
            categoryImgSrc: faker.image.avatarGitHub(),
          },
          {
            categoryName: faker.commerce.productName(),
            categoryImgSrc: faker.image.avatarGitHub(),
          },
        ]),
        budget: (() => {
          const total = faker.number.int({ min: 5000, max: 20000 })
          return {
            total,
            spent: faker.number.int({ min: 1000, max: total }),
          }
        })(),
      }
    },
  },
}
