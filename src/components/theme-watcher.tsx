import { useEffect } from 'react'
import { usePreferenceStore } from '@/hooks/use-preference-store'

export const ThemeWatcher = () => {
  const theme = usePreferenceStore((state) => state.theme)

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  return null
}
