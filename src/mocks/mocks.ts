import { faker } from "@faker-js/faker"

export const mocks = {
  user: {
    getUrl: () => "https://api.example.com/user",
    getMockData: () => {
      return {
        id: faker.number.int({ max: 1000 }),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      }
    },
  },
}
