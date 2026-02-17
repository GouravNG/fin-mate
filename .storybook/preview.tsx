import type { Preview, Decorator } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes'
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import '../src/index.css'
import i18n, { supportedLanguages } from '../src/i18n'
import { Suspense, useEffect, useMemo } from 'react'
import { I18nextProvider } from 'react-i18next'

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
   (React Compiler Safe)
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

  /*
    Decorators applied bottom-up.
    So the LAST decorator becomes the OUTERMOST wrapper.

    Final tree:

      withThemeByClassName  ← OUTERMOST (dark class here)
        withI18next
          withRouter
            Story
  */
  decorators: [
    withRouter,
    withI18next,
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
