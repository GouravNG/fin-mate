import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavigationItem } from '../Navigation'
import { TooltipProvider } from '../ui/tooltip'
import { Home } from 'lucide-react'
import type { TNavigation } from '@/types'
import type { ReactNode } from 'react'

const renderWithTooltipProvider = (component: ReactNode) => {
  return render(<TooltipProvider>{component}</TooltipProvider>)
}

describe('NavigationItem', () => {
  const createNavItem = (overrides?: Partial<TNavigation>): TNavigation => ({
    title: 'navigation.home.title',
    description: 'navigation.home.description',
    icon: Home,
    href: '/app',
    ...overrides,
  })
  it('renders correctly with icon and title', () => {
    // Expected Result: The NavigationItem should be in the document and contain the specified icon
    const navItem = createNavItem()
    renderWithTooltipProvider(<NavigationItem {...navItem} />)

    expect(screen.getByTestId(`nav-item-${navItem.title}`)).toBeInTheDocument()
    expect(screen.getByTestId(`nav-icon-${navItem.title}`)).toBeInTheDocument()
  })

  it('contains a link with the correct href', () => {
    // Expected Result: The rendered link should have the href attribute matching the prop
    const navItem = createNavItem({ href: '/app/settings', title: 'navigation.settings.title' })
    renderWithTooltipProvider(<NavigationItem {...navItem} />)

    const link = screen.getByTestId(`nav-link-${navItem.title}`)
    expect(link).toHaveAttribute('href', '/app/settings')
  })

  it('displays the translated label for small screens', () => {
    // Expected Result: The label span should contain the correctly translated text (e.g., "Home" for "navigation.home")
    const navItem = createNavItem({ title: 'navigation.home.title' })
    renderWithTooltipProvider(<NavigationItem {...navItem} />)

    const label = screen.getByTestId(`nav-label-${navItem.title}`)
    expect(label).toHaveTextContent('Home')
  })

  it('has a tooltip trigger wrapping the icon', () => {
    // Expected Result: The TooltipTrigger should contain the Icon component
    const navItem = createNavItem()
    renderWithTooltipProvider(<NavigationItem {...navItem} />)

    const trigger = screen.getByTestId(`nav-icon-trigger-${navItem.title}`)
    const icon = screen.getByTestId(`nav-icon-${navItem.title}`)
    expect(trigger).toContainElement(icon)
  })

  it('shows tooltip with correct text on hover', async () => {
    const user = userEvent.setup()
    const navItem = createNavItem()
    renderWithTooltipProvider(<NavigationItem {...navItem} />)

    await user.hover(screen.getByTestId(`nav-icon-trigger-${navItem.title}`))

    expect(await screen.findByTestId(`nav-tooltip-${navItem.title}`)).toHaveTextContent('Home')
  })
})
