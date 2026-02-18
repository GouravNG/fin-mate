import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { supportedLanguages } from '@/i18n'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/(auth)')({
  component: AuthLayout,
})

function AuthLayout() {
  const { i18n } = useTranslation()
  return (
    <div className="relative">
      <Outlet />
      <div className="absolute bottom-0 right-0 p-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="border flex items-center justify-center p-1 rounded-md">
            <div className="bg-primary text-primary-foreground hover:bg-primary/90 p-1 rounded-md">
              <Languages size="15" className="m-1" />
            </div>
            <span className="bg-background px-2 rounded-sm text-center">
              {i18n.resolvedLanguage}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {supportedLanguages.map((lng, k) => {
                return (
                  <DropdownMenuItem key={k} onClick={() => i18n.changeLanguage(lng.code)}>
                    {lng.name}
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
