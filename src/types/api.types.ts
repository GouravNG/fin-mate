import { mocks } from '@/mocks/mocks'

export type SummeryResponse = ReturnType<typeof mocks.user.getMockData>
export type TransactionsResponse = ReturnType<typeof mocks.transactions.getTransactions>
export type CardsResponse = ReturnType<typeof mocks.accounts.cards.getMockData>
