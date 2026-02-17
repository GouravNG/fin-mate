import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
import React from 'react'

// Mock TanStack Router
vi.mock('@tanstack/react-router', async (importOriginal) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual = (await importOriginal()) as any
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      navigate: vi.fn(),
    })),
    useNavigate: vi.fn(() => vi.fn()),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Link: ({ to, children, ...props }: any) => {
      return React.createElement('a', { href: to, ...props }, children)
    },
  }
})

// Cleanup after each test
afterEach(() => {
  cleanup()
})

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from '../../public/locales/en/translation.json'

// Initialize i18n for tests
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translation'],
  defaultNS: 'translation',
  resources: {
    en: {
      translation: enTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
})
