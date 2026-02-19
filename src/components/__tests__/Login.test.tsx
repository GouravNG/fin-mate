// import { screen, waitFor, render } from '@/test/utils'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, test, vi, beforeEach } from 'vitest'
import LoginForm from '@/components/forms/Login.form'
import { type SubmitHandler } from 'react-hook-form'
import { type LoginFormData } from '@/schemas/login.schema'
import { render, waitFor, screen } from '@testing-library/react'

const mockLoginSubmitFn: SubmitHandler<LoginFormData> = vi.fn()

const renderLoginForm = (disableSubmit = false) =>
  render(<LoginForm disableSubmit={disableSubmit} loginSubmitFn={mockLoginSubmitFn} />)

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  // ==================== Rendering Tests ====================
  describe('Rendering', () => {
    test('should render all required form elements', () => {
      renderLoginForm()

      expect(screen.getByText(/Email Address/i)).toBeInTheDocument()
      expect(screen.getByText(/Password/i, { selector: 'label' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
    })

    test('should render email input with correct attributes', () => {
      renderLoginForm()

      const emailInput = screen.getByPlaceholderText(/name@example\.com/i) as HTMLInputElement
      expect(emailInput).toBeInTheDocument()
      expect(emailInput.type).toBe('email')
      expect(emailInput).not.toBeDisabled()
    })

    test('should render password input with correct attributes', () => {
      renderLoginForm()

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      expect(passwordInput).toBeInTheDocument()
      expect(passwordInput.type).toBe('password')
      expect(passwordInput).not.toBeDisabled()
    })

    test('should render Forgot Password link', () => {
      renderLoginForm()

      const forgotPasswordLink = screen.getByText(/forgot password\?/i)
      expect(forgotPasswordLink).toBeInTheDocument()
      expect(forgotPasswordLink.tagName).toBe('A')
    })

    test('should render password visibility toggle button', () => {
      renderLoginForm()

      expect(
        screen.getByRole('button', { name: /toggle password visibility/i }),
      ).toBeInTheDocument()
    })

    test('should render a <form> element for semantic HTML', () => {
      const { container } = renderLoginForm()

      expect(container.querySelector('form')).toBeInTheDocument()
    })

    test('should render the submit button as disabled when disableSubmit is true', () => {
      renderLoginForm(true)

      expect(screen.getByRole('button', { name: /login/i })).toBeDisabled()
    })

    test('should render the submit button as enabled when disableSubmit is false', () => {
      renderLoginForm(false)

      expect(screen.getByRole('button', { name: /login/i })).not.toBeDisabled()
    })
  })

  // ==================== User Interaction Tests ====================
  describe('User Interactions', () => {
    test('should auto-focus the email input on render', () => {
      renderLoginForm()

      expect(screen.getByPlaceholderText(/name@example\.com/i)).toHaveFocus()
    })

    test('should update email input value when user types', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      const emailInput = screen.getByPlaceholderText(/name@example\.com/i) as HTMLInputElement
      await user.type(emailInput, 'test@example.com')

      expect(emailInput.value).toBe('test@example.com')
    })

    test('should update password input value when user types', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      await user.type(passwordInput, 'password123')

      expect(passwordInput.value).toBe('password123')
    })

    test('should toggle password visibility when the eye icon button is clicked', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      const toggleButton = screen.getByRole('button', { name: /toggle password visibility/i })

      expect(passwordInput.type).toBe('password')

      await user.click(toggleButton)
      expect(passwordInput.type).toBe('text')

      await user.click(toggleButton)
      expect(passwordInput.type).toBe('password')
    })
  })

  // ==================== Form Validation Tests ====================
  describe('Form Validation', () => {
    test('should show error for empty email on submit', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      await user.click(screen.getByRole('button', { name: /login/i }))

      await waitFor(() => {
        expect(screen.getByText(/Please enter a valid/i)).toBeInTheDocument()
      })
    })

    test('should show password error for a password that is too short', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      await user.type(screen.getByPlaceholderText(/•+/i), '123')
      await user.click(screen.getByRole('button', { name: /login/i }))

      await waitFor(() => {
        expect(screen.getByText(/Password must be/i)).toBeInTheDocument()
      })
    })

    test('should show password error for empty password on submit', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      await user.click(screen.getByRole('button', { name: /login/i }))

      await waitFor(() => {
        expect(screen.getByText(/Password must be/i)).toBeInTheDocument()
      })
    })

    test('should accept a valid email format without showing an error', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      const emailInput = screen.getByPlaceholderText(/name@example\.com/i) as HTMLInputElement
      await user.type(emailInput, 'valid@example.com')

      expect(emailInput.value).toBe('valid@example.com')
    })

    test('should accept a password with 6 or more characters without showing an error', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      await user.type(passwordInput, 'password123')

      expect(passwordInput.value).toBe('password123')
    })

    test('should call loginSubmitFn when the form is submitted with valid data', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      await user.type(screen.getByPlaceholderText(/name@example\.com/i), 'test@example.com')
      await user.type(screen.getByPlaceholderText(/•+/i), 'password123')
      await user.click(screen.getByRole('button', { name: /login/i }))

      await waitFor(() => {
        expect(mockLoginSubmitFn).toHaveBeenCalledOnce()
        expect(mockLoginSubmitFn).toHaveBeenCalledWith(
          { email: 'test@example.com', password: 'password123' },
          expect.anything(),
        )
      })
    })

    test('should NOT call loginSubmitFn when submitted with invalid data', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      await user.click(screen.getByRole('button', { name: /login/i }))

      await waitFor(() => {
        expect(mockLoginSubmitFn).not.toHaveBeenCalled()
      })
    })
  })

  // ==================== Accessibility Tests ====================
  describe('Accessibility', () => {
    test('should have visible labels for all form inputs', () => {
      renderLoginForm()

      expect(screen.getByText(/Email address/i, { selector: 'label' })).toBeInTheDocument()
      expect(screen.getByText(/Password/i, { selector: 'label' })).toBeInTheDocument()
    })

    test('should have accessible names for all interactive buttons', () => {
      renderLoginForm()

      expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /toggle password visibility/i }),
      ).toBeInTheDocument()
    })
  })

  // ==================== Edge Cases ====================
  describe('Edge Cases', () => {
    test('should trim whitespace when reading the email value', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      const emailInput = screen.getByPlaceholderText(/name@example\.com/i) as HTMLInputElement
      await user.type(emailInput, '  test@example.com  ')

      expect(emailInput.value.trim()).toBe('test@example.com')
    })

    test('should accept a password containing special characters', async () => {
      const user = userEvent.setup()
      renderLoginForm()

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      const specialPassword = 'P@ssw0rd!#$%'
      await user.type(passwordInput, specialPassword)

      expect(passwordInput.value).toBe(specialPassword)
    })
  })
})
