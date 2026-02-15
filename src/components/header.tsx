import { Bell } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ModeToggle } from './mode-toggle'
import { LanguageSwitcher } from './LanguageSwitcher'

type THeader = {
  username: string
  //   notifications: string[]
}

const Header: React.FC<THeader> = ({ username }) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-2 mb-4">
      <header className="flex items-center justify-between p-2">
        <div className="flex items-center justify-center space-x-2">
          <div className="pr-2">
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>GG</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm text-slate-600">{t('common.good_morning')}</p>
            <p className="font-semibold text-lg">{username}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 gap-2">
          <ModeToggle />
          <span className="bg-slate-100 dark:bg-slate-800 border rounded-full p-2">
            <Bell size={20} />
          </span>
        </div>
      </header>
      <div className="px-2">
        <LanguageSwitcher />
      </div>
    </div>
  )
}
export default Header
