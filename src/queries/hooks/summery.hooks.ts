import { useQuery } from "@tanstack/react-query"
import { getSummeryOptions } from "../options/summery.options"

export const useGetSummery = () => useQuery(getSummeryOptions)
