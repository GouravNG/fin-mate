import { BankAccounts } from '../BankAccounts'
import { UserCardList } from '../UserCard'

export const CardAndAccounts = () => {
  return (
    <div>
      <p className="text-xl font-semibold">Your cards</p>
      <div>
        <UserCardList />
        <BankAccounts />
      </div>
    </div>
  )
}
