import { http, HttpResponse } from "msw"
import { mocks } from "./mocks"

export const handlers = [
  // Mock for user endpoint
  http.get(mocks.user.getUrl(), () =>
    HttpResponse.json(mocks.user.getMockData()),
  ),
]
