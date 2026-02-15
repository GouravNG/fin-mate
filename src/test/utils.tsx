/* eslint-disable react-refresh/only-export-components */
import { render, type RenderOptions } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactElement, ReactNode } from 'react'

// Create a custom render function that includes providers
function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Don't retry in tests
        gcTime: 0, // Don't cache in tests
      },
      mutations: {
        retry: false,
      },
    },
  })
}

interface AllTheProvidersProps {
  children: ReactNode
}

function AllTheProviders({ children }: AllTheProvidersProps) {
  const queryClient = createTestQueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

/**
 * Custom render function that wraps components with necessary providers
 *
 * @example
 * import { renderWithProviders, screen } from '@/test/utils';
 *
 * renderWithProviders(<MyComponent />);
 * expect(screen.getByText('Hello')).toBeInTheDocument();
 */
function renderWithProviders(ui: ReactElement, options?: RenderOptions) {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  })
}

// Re-export testing utilities
export { screen, waitFor, within, cleanup, type RenderOptions } from '@testing-library/react'
export { userEvent } from '@testing-library/user-event'

// Override render method
export { renderWithProviders as render }
