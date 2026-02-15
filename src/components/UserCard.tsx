import { useGetCards } from '@/queries/hooks/account-card.hooks'
import type { TCard } from '@/types'
import { getCardBrandLogoByName } from '@/utils/getCardBrandLogoByName'
import { Nfc } from 'lucide-react'

export const UserCardList = () => {
  const { data, isLoading, isError } = useGetCards()
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Something went wrong!!</p>
  if (data === undefined || data.length === 0) return <p>No cards found</p>
  else
    return (
      <div className="flex overflow-x-auto gap-8 py-4 snap-x snap-mandatory">
        {data.map((i) => {
          return <UserCard {...i} key={i.id} />
        })}
      </div>
    )
}

export const UserCard: React.FC<TCard> = ({
  cardTitle,
  cardtype,
  transaction,
  cardNumber,
  cardHolderName,
  expiryDate,
  cardBrand,
}) => {
  return (
    <div className="flex flex-col border shadow-sm p-4 rounded-lg my-2 w-82 h-48 bg-linear-to-r from-amber-500 to-pink-500 shrink-0 snap-start">
      <div className="flex items-center justify-between">
        <div className="font-light text-xl">{cardTitle ?? 'Untitiled.'}</div>
        <div>
          <Nfc />
        </div>
      </div>
      <div className="text-4xl font-i-serif ">
        {cardtype === 'credit' ? transaction : 'Recent Transactions.'}
      </div>
      <div className="flex mt-auto font-sans">
        <div className="">
          <p>{cardNumber.replaceAll('-', ' ')}</p>
          <p className="uppercase text-nowrap whitespace-nowrap truncate">{cardHolderName}</p>
        </div>
        <div className="flex ml-auto">
          <p className="mt-auto">{expiryDate}</p>
        </div>
        <div className="ml-auto mt-auto">
          <span>
            <img src={getCardBrandLogoByName(cardBrand)} alt="Visa" width={50} height={10} />
          </span>
        </div>
      </div>
    </div>
  )
}
