import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const viTestQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Don't retry in tests
      gcTime: 0, // Don't cache in tests
    },
    mutations: {
      retry: false,
    },
  },
})
