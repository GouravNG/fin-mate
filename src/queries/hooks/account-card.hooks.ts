import { useQuery } from "@tanstack/react-query"
import { cardOptions } from "../options/account-card.fn"

export const useGetCards = () => useQuery(cardOptions)
