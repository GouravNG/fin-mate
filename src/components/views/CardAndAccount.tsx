import { useTranslation } from 'react-i18next'
import { BankAccounts } from '../BankAccounts'
import { UserCardList } from '../UserCard'
import { useGetBankAccountDetails, useGetCards } from '@/queries/hooks/account-card.hooks'
import { Suspense } from 'react'

export const CardAndAccounts = () => {
  const { t } = useTranslation()
  const { data, isLoading, isError } = useGetCards()
  const { data: bankDt } = useGetBankAccountDetails()
  return (
    <div className="mt-10">
      <p className="text-xl font-semibold font-heading">{t('', 'Your cards')}</p>
      <div>
        <UserCardList data={data} isLoading={isLoading} isError={isError} />
        <Suspense fallback="loading">
          <BankAccounts data={bankDt} />
        </Suspense>
      </div>
    </div>
  )
}
