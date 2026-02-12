import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createMemoryHistory, createRouter } from '@tanstack/react-router';
import { ReactElement, ReactNode } from 'react';

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
    });
}

interface AllTheProvidersProps {
    children: ReactNode;
}

function AllTheProviders({ children }: AllTheProvidersProps) {
    const queryClient = createTestQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
    withRouter?: boolean;
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
function renderWithProviders(
    ui: ReactElement,
    options?: CustomRenderOptions
) {
    const { withRouter = false, ...renderOptions } = options || {};

    return render(ui, {
        wrapper: AllTheProviders,
        ...renderOptions,
    });
}

// Re-export everything from React Testing Library
export * from '@testing-library/react';
export { userEvent } from '@testing-library/user-event';

// Override render method
export { renderWithProviders as render };
