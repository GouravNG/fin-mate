import { Bell, CircleX } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useTranslation } from 'react-i18next'

type TNotifications = {
  notifications: string[]
}

const NotifictionsList: React.FC<TNotifications> = ({ notifications }) => {
  return (
    <>
      {notifications.map((i, k) => {
        return (
          <div key={i + k} className="relative">
            <DropdownMenuItem data-testid={`notification-item`}>{i}</DropdownMenuItem>
            <span className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer">
              <CircleX className="text-destructive" size={20} />
            </span>
          </div>
        )
      })}
    </>
  )
}

const Notifications = ({ notifications }: TNotifications) => {
  const { t } = useTranslation()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-testid="notification-trigger-btn">
        <Button variant={'ghost'} size={'icon'} className="rounded-full border">
          <Bell size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel data-testid={'notification-label'}>
          {t('notifications.title', 'Your Notifications')}
        </DropdownMenuLabel>
        {notifications.length ? (
          <NotifictionsList notifications={notifications} />
        ) : (
          <DropdownMenuLabel className="text-muted-foreground" data-testid="notification-no-text">
            {t('notifications.no_notifications', "You're all caught up! 🎉")}
          </DropdownMenuLabel>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Notifications
