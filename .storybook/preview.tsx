import type { Preview, Decorator } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes'
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import '../src/index.css'
import i18n, { supportedLanguages } from '../src/i18n'
import { Suspense, useEffect, useMemo } from 'react'
import { I18nextProvider } from 'react-i18next'
import { viTestQueryClient } from '../src/configs/query.config'

/* ============================================================
   QUERY CLIENT DECORATOR
============================================================ */

const withQueryClient: Decorator = (Story) => (
  <QueryClientProvider client={viTestQueryClient}>
    <Story />
  </QueryClientProvider>
)

/* ============================================================
   I18N DECORATOR
============================================================ */

const withI18next: Decorator = (Story, context) => {
  const locale = context.globals.locale ?? supportedLanguages[0]?.code ?? 'en'

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale])

  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <I18nextProvider i18n={i18n}>{Story()}</I18nextProvider>
    </Suspense>
  )
}

/* ============================================================
   ROUTER DECORATOR
============================================================ */

const withRouter: Decorator = (Story) => {
  const StoryOutlet = () => Story()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useMemo(() => {
    const rootRoute = createRootRoute({
      component: StoryOutlet,
    })

    return createRouter({
      routeTree: rootRoute,
      history: createMemoryHistory(),
    })
  }, [])

  return <RouterProvider router={router} />
}

/* ============================================================
   GLOBAL TYPES
============================================================ */

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: supportedLanguages[0]?.code ?? 'en',
    toolbar: {
      icon: 'globe',
      items: supportedLanguages.map((lang) => ({
        value: lang.code,
        title: lang.name,
      })),
      showName: true,
    },
  },
}

/* ============================================================
   STORYBOOK CONFIG
============================================================ */

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    withRouter,
    withI18next,
    withQueryClient,
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
