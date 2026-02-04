import { http, HttpResponse } from "msw"
import { mocks } from "./mocks"

export const handlers = [
  // Mock for user endpoint
  http.get(mocks.user.getUrl(), () =>
    HttpResponse.json(mocks.user.getMockData()),
  ),
  // Mock for transactions endpoint
  http.get(mocks.transactions.getUrl(), ({ request }) => {
    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get("page") || "1")
    const limit = parseInt(url.searchParams.get("limit") || "10")
    return HttpResponse.json(mocks.transactions.getTransactions(page, limit))
  }),
]
