import { useTranslation } from 'react-i18next'
import { BankAccounts } from '../BankAccounts'
import { UserCardList } from '../UserCard'
import { useGetCards } from '@/queries/hooks/account-card.hooks'

export const CardAndAccounts = () => {
  const { t } = useTranslation()
  const { data, isLoading, isError } = useGetCards()
  return (
    <div className="mt-10">
      <p className="text-xl font-semibold font-heading">{t('', 'Your cards')}</p>
      <div>
        <UserCardList data={data} isLoading={isLoading} isError={isError} />
        <BankAccounts />
      </div>
    </div>
  )
}
