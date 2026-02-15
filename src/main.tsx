import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import './index.css'
import './i18n' // Import i18n configuration
import { routeTree } from './routeTree.gen.ts'
import TanstackQueryProvider from './components/context/TanstackQuery.provider.tsx'
import { ThemeWatcher } from './components/theme-watcher'

async function enableMocking() {
  const { worker } = await import('./mocks/browser.ts')
  return worker.start()
}

const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Suspense fallback="Loading translations...">
        <TanstackQueryProvider>
          <ThemeWatcher />
          <RouterProvider router={router} />
        </TanstackQueryProvider>
      </Suspense>
    </StrictMode>,
  )
})
