import { useEffect } from 'react'
import { usePreferenceStore } from '@/store/use-preference-store'

export const ThemeWatcher = () => {
  const theme = usePreferenceStore((state) => state.theme)

  useEffect(() => {
    const root = globalThis.document.documentElement
    root.classList.remove('light', 'dark')
    if (theme === 'system') {
      const systemTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }
    root.classList.add(theme)
  }, [theme])

  return null
}
