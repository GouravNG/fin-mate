import { Button } from '../ui/button'
import { UserCardList } from '../UserCard'
import { useTranslation } from 'react-i18next'
import { BankAccounts } from '../BankAccounts'
import { useGetBankAccountDetails, useGetCards } from '@/queries/hooks/account-card.hooks'

export const CardAndAccounts = () => {
  const { t } = useTranslation()
  const { data, isLoading, isError } = useGetCards()
  const {
    data: bankDetails,
    isError: isBankCardError,
    isLoading: isBankCardsLoading,
  } = useGetBankAccountDetails()
  return (
    <div className="mt-10">
      <p className="text-xl font-semibold font-heading">{t('bankAccounts.yourCards')}</p>
      <UserCardList data={data} isLoading={isLoading} isError={isError} />

      <div className="text-xl font-semibold flex items-center justify-between my-2">
        <p className="font-heading">{t('bankAccounts.bankAccounts')}</p>
        <Button variant={'link'} className="cursor-pointer font-semibold">
          {t('bankAccounts.manageAccounts')}
        </Button>
      </div>

      <BankAccounts data={bankDetails} isLoading={isBankCardsLoading} isError={isBankCardError} />
    </div>
  )
}
