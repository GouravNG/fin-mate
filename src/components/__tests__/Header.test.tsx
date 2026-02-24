import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../header'
import * as greetingsModule from '@/utils/getGreetings'

vi.mock('@/utils/getGreetings')

describe('Header component', () => {
  const mockProps = {
    username: 'John Doe',
    avatar: 'https://example.com/avatar.png',
    userNameShortForm: 'JD',
    notifications: ['notification 1', 'notification 2'],
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  // TEST CASE 1: Rendering
  it('should render the component with all props', () => {
    render(<Header {...mockProps} />)

    // Check if the main container is rendered
    expect(screen.getByTestId('header-container')).toBeInTheDocument()

    // Check if all the required data-tetids are rendered.
    expect(screen.getByTestId('profile-avatar')).toBeInTheDocument()
    expect(screen.getByTestId('language-switcher-btn')).toBeInTheDocument()
    expect(screen.getByTestId('mode-toggle')).toBeInTheDocument()
    expect(screen.getByTestId('notification-trigger-btn')).toBeInTheDocument()
  })

  // TEST CASE 2A: Display morning greeting
  it('should display morning greeting message correctly', () => {
    vi.spyOn(greetingsModule, 'getGreetings').mockReturnValue('greetings.morning')

    render(<Header {...mockProps} />)

    const greetingElement = screen.getByTestId('header-greeting')
    expect(greetingElement).toBeInTheDocument()
    expect(greetingElement).toHaveTextContent('Good Morning')
  })

  // TEST CASE 2B: Display afternoon greeting
  it('should display afternoon greeting message correctly', () => {
    vi.spyOn(greetingsModule, 'getGreetings').mockReturnValue('greetings.afternoon')

    render(<Header {...mockProps} />)

    const greetingElement = screen.getByTestId('header-greeting')
    expect(greetingElement).toBeInTheDocument()
    expect(greetingElement).toHaveTextContent('Good Afternoon')
  })

  // TEST CASE 2C: Display evening greeting
  it('should display evening greeting message correctly', () => {
    vi.spyOn(greetingsModule, 'getGreetings').mockReturnValue('greetings.evening')

    render(<Header {...mockProps} />)

    const greetingElement = screen.getByTestId('header-greeting')
    expect(greetingElement).toBeInTheDocument()
    expect(greetingElement).toHaveTextContent('Good Evening')
  })

  // TEST CASE 3: Username Display
  it('should display the username correctly', () => {
    render(<Header {...mockProps} />)

    const usernameElement = screen.getByTestId('header-username')
    expect(usernameElement).toBeInTheDocument()
    expect(usernameElement).toHaveTextContent('John Doe')
  })

  // TEST CASE 4A: ProfileAvatar with avatar string
  // it('should render ProfileAvatar with avatar image when avatar prop is provided', () => {
  //   render(<Header {...mockProps} />)

  //   const profileAvatar = screen.getByTestId('profile-avatar')
  //   expect(profileAvatar).toBeInTheDocument()

  //   const imgElement = screen.getByTestId('profile-avatar-img-src')
  //   expect(imgElement).toBeInTheDocument()
  //   expect(imgElement).toHaveAttribute('src', 'https://example.com/avatar.png')
  // })

  // TEST CASE 4B: ProfileAvatar with undefined avatar (fallback)
  it('should render ProfileAvatar with fallback when avatar prop is undefined', () => {
    const propsWithoutAvatar = {
      ...mockProps,
      avatar: undefined,
    }

    render(<Header {...propsWithoutAvatar} />)

    const profileAvatar = screen.getByTestId('profile-avatar')
    expect(profileAvatar).toBeInTheDocument()

    // Check for fallback UI showing userNameShortForm
    expect(profileAvatar).toHaveTextContent('JD')
  })

  // TEST CASE 5A: Empty notifications array
  it('should display required message when notifications array is empty', async () => {
    const propsWithEmptyNotifications = {
      ...mockProps,
      notifications: [],
    }

    render(<Header {...propsWithEmptyNotifications} />)

    const notificationsElement = screen.getByTestId('notification-trigger-btn')
    expect(notificationsElement).toBeInTheDocument()

    // Click on notifications trigger to open dropdown
    const user = userEvent.setup()
    await user.click(notificationsElement)

    // Check for empty state message
    const emptyStateMessage = await screen.findByText(/You're all caught up/i)
    expect(emptyStateMessage).toBeInTheDocument()
  })

  // TEST CASE 5B: Notifications with content
  it('should display notifications when notifications array has content', async () => {
    render(<Header {...mockProps} />)

    const notificationsElement = screen.getByTestId('notification-trigger-btn')
    expect(notificationsElement).toBeInTheDocument()

    // Click on notifications trigger to open dropdown
    const user = userEvent.setup()
    await user.click(notificationsElement)

    // Check that notifications are displayed
    expect(screen.getByText('notification 1')).toBeInTheDocument()
    expect(screen.getByText('notification 2')).toBeInTheDocument()
  })

  // TEST CASE 7: Empty/Missing Props Handling
  it('should handle missing or empty avatar gracefully', () => {
    const propsWithEmptyAvatar = {
      ...mockProps,
      avatar: undefined,
    }

    render(<Header {...propsWithEmptyAvatar} />)

    expect(screen.getByTestId('header-container')).toBeInTheDocument()
    expect(screen.getByTestId('profile-avatar')).toBeInTheDocument()
  })
})
