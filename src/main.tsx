import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import { ThemeWatcher } from './store/theme-watcher.tsx'
import { AuthRouterProvider, TanstackQueryProvider } from './components/context'

async function enableMocking() {
  if (import.meta.env.VITE_ENABLE_MOCK === 'true') {
    const { worker } = await import('./mocks/browser.ts')
    return worker.start()
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Suspense fallback="Loading...">
        <TanstackQueryProvider>
          <ThemeWatcher />
          <AuthRouterProvider />
        </TanstackQueryProvider>
      </Suspense>
    </StrictMode>,
  )
})
