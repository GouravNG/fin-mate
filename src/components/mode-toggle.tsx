import { Moon, Sun, Monitor } from 'lucide-react'
import { usePreferenceStore, type TTheme } from '@/store/use-preference-store'
import { Button } from './ui/button'
import { useTranslation } from 'react-i18next'

export const ModeToggle = () => {
  const { t } = useTranslation()
  const { theme, setTheme } = usePreferenceStore()

  const toggleTheme = () => {
    const themes: TTheme[] = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />
      case 'dark':
        return <Moon className="h-5 w-5" />
      default:
        return <Monitor className="h-5 w-5" />
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="border rounded-full"
      title={t('common.theme_description', {
        defaultValue: `Current theme: ${theme}. Click to cycle.`,
        theme,
      })}
      data-testid="mode-toggle"
    >
      {getIcon()}
      <span className="sr-only">{t('common.toggle_theme', 'Toggle theme')}</span>
    </Button>
  )
}
