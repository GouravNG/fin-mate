import { Lock, PlusCircle } from 'lucide-react'
import { Button } from './ui/button'
import { useTranslation } from 'react-i18next'
import { getNumberAsCurrency } from '@/utils/intl'
import type { TBankAccount, TBankAccounts } from '@/types'
import { getBankIconPreference } from '@/utils/getPreferences'
import { Separator } from '@/components/ui/separator'

const BankAccount: React.FC<TBankAccount> = ({
  bankName,
  balance,
  icon,
  last4Digits,
  // nickName,
}) => {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-between p-4 w-full">
      <div className={`p-2 ${icon.background} border rounded-md`}>
        <icon.icon className={`${icon.foreground} `} />
      </div>

      <div className="pl-4">
        <div className="font-semibold">{bankName}</div>
        <div className="flex items-center justify-start text-sm">
          <div className="flex">{Array.from({ length: 3 }).map(() => '*')}</div>
          <div>{last4Digits}</div>
        </div>
      </div>

      <div className="ml-auto flex flex-col items-end justify-center">
        <div className="font-semibold">{getNumberAsCurrency(balance)}</div>
        <div className="text-xs text-muted-foreground font-semibold">
          {t('', 'available balance')}
        </div>
      </div>
    </div>
  )
}

export const BankAccounts: React.FC<TBankAccounts> = ({ data }) => {
  const { t } = useTranslation()
  const iconPref = getBankIconPreference()
  return (
    <>
      <div className="text-xl font-semibold flex items-center justify-between my-2">
        <p className="font-heading">{t('', 'Bank Accounts')}</p>
        <Button variant={'link'} className="cursor-pointer font-semibold">
          {t('', 'Manage connections')}
        </Button>
      </div>

      <div className="flex flex-col gap-2 border rounded-md">
        {data.map((bnk, key) => {
          return (
            <div key={bnk.last4Digits + key}>
              <BankAccount {...bnk} icon={iconPref} />
              {data.length - 1 !== key && <Separator />}
            </div>
          )
        })}
      </div>
      {/* MOBILE ONLY UI */}
      <div className="flex sm:hidden flex-col gap-4 mt-4">
        <div className="flex items-center justify-center flex-col gap-2 border bg-accent rounded-lg p-4 text-muted-foreground">
          <Lock className="text-2xl" />
          <div className="font-semibold text-foreground">{t('', 'ENCRYPTED & SECURE')}</div>
          <div className="text-xs text-center">
            {t(
              '',
              'We use 256-bit encryption to keep your data safe and never store your login credentials.',
            )}
          </div>
        </div>
        <Button className="w-full font-semibold">
          <PlusCircle />
          {t('', 'Add New Account')}
        </Button>
      </div>
    </>
  )
}
