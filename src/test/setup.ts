import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import React from 'react'
import enTranslation from '../../public/locales/en/translation.json'

// Mock TanStack Router
vi.mock('@tanstack/react-router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@tanstack/react-router')>()
  return {
    ...actual,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Link: ({ to, children, ...props }: any) => {
      return React.createElement('a', { href: to as string, ...props }, children)
    },
  }
})

// Initialize i18n for tests (guard prevents re-initialization across test files)
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation'],
    defaultNS: 'translation',
    debug: false,
    resources: {
      en: {
        translation: enTranslation,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
}

// Cleanup after each test (was duplicated, kept once)
afterEach(() => {
  cleanup()
})
