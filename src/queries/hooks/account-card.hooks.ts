import { useQuery } from '@tanstack/react-query'
import { bankAccountOptions, cardOptions } from '../options/account-card.fn'

export const useGetCards = () => useQuery(cardOptions)
export const useGetBankAccountDetails = () => useQuery(bankAccountOptions)
