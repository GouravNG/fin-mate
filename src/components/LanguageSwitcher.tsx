import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Languages } from 'lucide-react'
import { supportedLanguages } from '@/i18n'

export const LanguageSwitcher = () => {
  const {
    i18n: { changeLanguage, resolvedLanguage },
  } = useTranslation()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'secondary'}>
          <Languages />
          {resolvedLanguage}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-sm text-muted-foreground">
            Select your language
          </DropdownMenuLabel>
          {supportedLanguages.map((i, k) => {
            return (
              <DropdownMenuItem key={i.code + k} onClick={() => changeLanguage(i.code)}>
                {i.name}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
