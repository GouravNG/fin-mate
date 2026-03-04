import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { useTranslation } from 'react-i18next'
import { Lock, PlusCircle } from 'lucide-react'
import { getNumberAsCurrency } from '@/utils/intl'
import { Separator } from '@/components/ui/separator'
import type { TBankAccount, TBankAccounts } from '@/types'
import { getBankIconPreference } from '@/utils/getPreferences'

const BankAccount: React.FC<TBankAccount> = ({
  bankName,
  balance,
  icon,
  last4Digits,
  // nickName,
}) => {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-between p-4 w-full text-sm">
      <div className={`p-2 ${icon.background} border rounded-md`}>
        <icon.icon className={`${icon.foreground} `} />
      </div>

      <div className="pl-4">
        <div className="font-semibold">{bankName}</div>
        <div className="flex items-center justify-start text-sm text-muted-foreground">
          <div className="flex">{Array.from({ length: 3 }).map(() => '*')}</div>
          <div>{last4Digits}</div>
        </div>
      </div>

      <div className="ml-auto flex flex-col items-end justify-center">
        <div className="font-semibold">{getNumberAsCurrency(balance)}</div>
        <div className="text-xs text-muted-foreground font-semibold">
          <p className="hidden sm:block">{t('bankAccounts.availableBalance')}</p>
          <p className="sm:hidden">{t('bankAccounts.balance')}</p>
        </div>
      </div>
    </div>
  )
}

const BankAccountsSkeletons = () => {
  return (
    <div className="flex flex-col gap-2 h-60">
      {Array.from({ length: 3 }).map((_, key) => {
        return <Skeleton key={key + 1} className="w-full h-20" />
      })}
    </div>
  )
}

const BankAccountsEmpty = () => {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-between p-4 w-full text-sm">
      <p className="m-auto">{t('bankAccounts.noBankAccountLinked')}</p>
    </div>
  )
}

const BankAccountsError = () => {
  const { t } = useTranslation()
  return <p className="text-center text-destructive">{t('bankAccounts.somethingWentWrong')}</p>
}

export const BankAccounts: React.FC<TBankAccounts> = ({ data, isLoading, isError }) => {
  const { t } = useTranslation()

  if (isLoading) return <BankAccountsSkeletons />

  if (isError) return <BankAccountsError />

  if (data === undefined || data.length === 0) return <BankAccountsEmpty />
  else
    return (
      <>
        <div className="flex flex-col gap-2 border rounded-md">
          {data.map((bnk, key) => {
            const iconPref = getBankIconPreference()
            return (
              <div key={bnk.last4Digits}>
                <BankAccount {...bnk} icon={iconPref} />
                {data.length - 1 !== key && <Separator />}
              </div>
            )
          })}
        </div>
        {/* MOBILE ONLY UI */}
        <div className="flex sm:hidden flex-col gap-4 mt-4 mb-24">
          <div className="flex items-center justify-center flex-col gap-2 border bg-accent rounded-lg p-4 text-muted-foreground">
            <Lock className="text-2xl" />
            <div className="font-semibold text-foreground">{t('bankAccounts.encryptedSecure')}</div>
            <div className="text-xs text-center">{t('bankAccounts.encryptionDescription')}</div>
          </div>
          <Button className="w-full font-semibold">
            <PlusCircle />
            {t('bankAccounts.addNewAccount')}
          </Button>
        </div>
      </>
    )
}
