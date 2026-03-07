import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { TCard, TUserCards } from '@/types'
import { getNumberAsCurrency } from '@/utils/intl'
import { getRandomGradient } from '@/utils/getPreferences'
import { getCardBrandLogoByName } from '@/utils/getCardBrandLogoByName'
import { BrushCleaning, CircleAlert, Nfc, PlusSquareIcon } from 'lucide-react'

export const UserCardList: React.FC<TUserCards> = ({ data, isLoading, isError = false }) => {
  if (isLoading)
    return (
      <UserCardListContainer>
        {Array.from({ length: 2 }).map((_, k) => (
          <UserCardSkeleton key={k} />
        ))}
        <AddCard addCardFn={() => ({})} />
      </UserCardListContainer>
    )
  if (isError) return <UserCardError />

  if (data === undefined || data.length === 0) return <UserCardEmpty />
  else
    return (
      <UserCardListContainer>
        {data.map((i) => {
          return <UserCard {...i} key={i.id} />
        })}

        <AddCard addCardFn={() => () => {}} />
      </UserCardListContainer>
    )
}

const UserCardSkeleton = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-accent animate-pulse p-4 rounded-2xl my-4 w-82 h-48', className)}
      {...props}
    />
  )
}

const UserCardEmpty = () => {
  const { t } = useTranslation()
  return (
    <UserCardListContainer>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center w-82 h-48 rounded-2xl my-4 border border-dashed border-muted-foreground/30 bg-muted/40 text-muted-foreground shrink-0 gap-2 p-4"
      >
        <BrushCleaning />
        <p className="font-heading text-lg font-medium">
          {t('userCard.empty.title', 'No cards yet')}
        </p>
        <p className="text-sm text-muted-foreground/70 text-center">
          {t('userCard.empty.description', 'Add your first card to get started.')}
        </p>
      </motion.div>
      <AddCard addCardFn={() => ({})} />
    </UserCardListContainer>
  )
}

const UserCardError = () => {
  const { t } = useTranslation()
  return (
    <UserCardListContainer>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center w-82 h-48 rounded-2xl my-4 border border-destructive/30 bg-destructive/10 text-destructive shrink-0 gap-2 p-4"
      >
        <CircleAlert />
        <p className="font-heading text-lg font-medium">
          {t('userCard.error.title', 'Something went wrong')}
        </p>
        <p className="text-sm text-destructive/70 text-center">
          {t('userCard.error.description', "We couldn't load your cards. Please try again.")}
        </p>
      </motion.div>
    </UserCardListContainer>
  )
}

const UserCardListContainer = ({
  children,
  className,
}: { children: React.ReactNode } & React.ComponentProps<'div'>) => {
  return (
    <div className={cn('flex overflow-x-auto gap-8 py-4 snap-x snap-mandatory', className)}>
      <div className="flex gap-8">{children}</div>
    </div>
  )
}

const UserCardContainer = ({
  children,
  containerColor = 'bg-primary',
  className,
}: { children: React.ReactNode; containerColor?: string } & React.ComponentProps<'div'>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'flex flex-col p-4 rounded-2xl my-4 w-82 h-48 shrink-0 snap-start hover:shadow-lg hover:cursor-pointer select-none',
        'bg-linear-to-r',
        `${containerColor}`,
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

const AddCard = ({ addCardFn }: { addCardFn: () => void }) => {
  const { t } = useTranslation()
  return (
    <UserCardContainer containerColor="bg-secondary" className="border p-1">
      <Button
        className="flex items-center justify-center w-full h-full hover:cursor-pointer"
        variant={'outline'}
        onClick={() => addCardFn}
      >
        <PlusSquareIcon />
        {t('userCard.action.addNew', 'Add new card')}
      </Button>
    </UserCardContainer>
  )
}

const UserCardTitle = ({ cardTitle }: { cardTitle: string }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-light text-xl font-heading">{cardTitle}</div>
      <div>
        <Nfc />
      </div>
    </div>
  )
}

const UserCardAmount: React.FC<Pick<TCard, 'cardtype' | 'transaction'>> = ({
  cardtype,
  transaction,
}) => {
  return (
    <div className="text-3xl font-mono font-light">
      {cardtype === 'credit' && getNumberAsCurrency(transaction)}
    </div>
  )
}

const UserCardFooter: React.FC<
  Pick<TCard, 'cardNumber' | 'expiryDate' | 'cardBrand' | 'cardHolderName'>
> = ({ cardBrand, cardNumber, expiryDate, cardHolderName }) => {
  return (
    <div className="flex mt-auto">
      <div>
        <p className="font-light">{cardNumber.replaceAll('-', ' ')}</p>
        <p className="uppercase max-w-32 truncate" title={cardHolderName}>
          {cardHolderName}
        </p>
      </div>
      <div className="flex ml-auto">
        <p className="mt-auto">{expiryDate}</p>
      </div>
      <div className="ml-auto mt-auto">
        <span>
          <img src={getCardBrandLogoByName(cardBrand)} alt={cardBrand} width={40} height={5} />
        </span>
      </div>
    </div>
  )
}

const UserCard: React.FC<TCard> = (props) => {
  return (
    <UserCardContainer containerColor={getRandomGradient()}>
      <UserCardTitle {...props} />
      <UserCardAmount {...props} />
      <UserCardFooter {...props} />
    </UserCardContainer>
  )
}
