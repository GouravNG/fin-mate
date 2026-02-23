import { navigationData } from './data/navigation.data'
import { Link } from '@tanstack/react-router'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { useGetProfileDetails } from '@/queries/hooks/summery.hooks'
import type { ReactNode } from 'react'
import type { TNavigation } from '@/types'
import ProfileAvatar from './ProfileAvatar'
import { useTranslation } from 'react-i18next'

const NavigationContainer = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="fixed bottom-0 sm:bottom-auto sm:left-0 sm:top-0 border-t sm:border-0 w-full sm:w-15 sm:h-screen">
      <ul className="bg-muted h-full flex sm:flex-col items-center justify-around sm:justify-between">
        {children}
      </ul>
    </nav>
  )
}

const NavigationItem = (prop: TNavigation) => {
  const { t } = useTranslation()
  return (
    <li>
      <Link
        to={prop.href}
        activeOptions={{ exact: true }}
        className="flex flex-col items-center justify-center p-2 text-muted-foreground [&.active]:text-primary [&.active]:font-semibold"
      >
        <Tooltip>
          <TooltipTrigger>
            <prop.icon className="p-2 shrink-0 w-10 h-10" />
          </TooltipTrigger>
          <TooltipContent side="right">{t(prop.title)}</TooltipContent>
        </Tooltip>
        <span className="sm:hidden text-sm">{t(prop.title)}</span>
      </Link>
    </li>
  )
}

const Navigation = () => {
  const { data } = useGetProfileDetails()
  return (
    <NavigationContainer>
      <div className="flex sm:flex-col items-center justify-around sm:justify-start flex-1">
        {navigationData.map((n, k) => {
          return <NavigationItem {...n} key={n.title + k} />
        })}
      </div>
      {data && <ProfileAvatar avatar={data.avatar} usernameShortForm={data.usernameShortForm} />}
    </NavigationContainer>
  )
}
export default Navigation
