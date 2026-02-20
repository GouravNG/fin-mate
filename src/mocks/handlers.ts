import { delay, http, HttpResponse } from 'msw'
import { mocks } from './mocks'

export const handlers = [
  // Mock for user endpoint
  http.get(mocks.user.getUrl(), () => HttpResponse.json(mocks.user.getMockData())),
  // Mock for transactions endpoint
  http.get(mocks.transactions.getUrl(), ({ request }) => {
    const url = new URL(request.url)
    const page = Number.parseInt(url.searchParams.get('page') || '1')
    const limit = Number.parseInt(url.searchParams.get('limit') || '10')
    return HttpResponse.json(mocks.transactions.getTransactions(page, limit))
  }),

  // Mock for accounts/cards endpoint
  http.get(mocks.accounts.cards.getUrl(), () =>
    HttpResponse.json(mocks.accounts.cards.getMockData()),
  ),

  http.post(mocks.auth.login.getUrl(), () => {
    delay('real')
    return HttpResponse.json(mocks.auth.login.getMockData())
  }),

  http.post(mocks.auth.signup.getUrl(), () => {
    delay('real')
    return HttpResponse.json(mocks.auth.login.getMockData())
  }),
]
