import { ModeToggle } from './mode-toggle'
import ProfileAvatar from './ProfileAvatar'
import Notifications from './Notifications'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { getGreetings } from '@/utils/getGreetings'
import type { THeader } from '@/types'



const Header: React.FC<THeader> = ({ username, avatar, userNameShortForm, notifications }) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-2 mb-4" data-testid="header-container">
      <header className="flex items-center justify-between p-2">
        <div className="flex items-center justify-center space-x-2">
          <div className="pr-2">
            <ProfileAvatar avatar={avatar} usernameShortForm={userNameShortForm} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm text-muted-foreground" data-testid="header-greeting">
              {t(getGreetings())}
            </p>
            <p className="font-semibold text-lg" data-testid="header-username">
              {username}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 gap-2">
          <LanguageSwitcher />
          <ModeToggle />
          <Notifications notifications={notifications} />
        </div>
      </header>
    </div>
  )
}
export default Header
