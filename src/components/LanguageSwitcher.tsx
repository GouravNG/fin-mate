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
    t,
    i18n: { changeLanguage, resolvedLanguage },
  } = useTranslation()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild aria-label="Switch Language">
        <Button variant={'secondary'} data-testid="language-switcher-btn">
          <Languages />
          {resolvedLanguage}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-sm text-muted-foreground">
            {t('common.select_language', 'Select your language')}
          </DropdownMenuLabel>
          {supportedLanguages.map((i, k) => {
            return (
              <DropdownMenuItem
                data-testid={`languages`}
                key={i.code + k}
                onClick={() => changeLanguage(i.code)}
              >
                {i.name}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
