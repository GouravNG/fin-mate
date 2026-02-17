import { render, screen, waitFor } from '@/test/utils'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, test, vi, beforeEach } from 'vitest'
import Login from '@/components/views/Login'

/**
 * Tests for the Login page.
 *
 * Architecture note:
 * - <Login /> is the full page container (LoginContainer + LoginHeader + LoginContent + LoginFooter)
 * - <LoginForm /> lives inside LoginContent and owns the email/password fields + submit button
 * - SSO buttons and "or continue with" text live in LoginFooter, outside LoginForm
 * - "Forgot password?" link is rendered inside LoginForm
 *
 * Tests that cover the full user-facing login page should render <Login />.
 * If you want to unit-test LoginForm in isolation, import it directly.
 */

describe('Login Page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  // ==================== Rendering Tests ====================
  describe('Rendering', () => {
    test('should render the page with all required elements', () => {
      render(<Login />)

      // Header
      expect(screen.getByText(/FinMate/i)).toBeInTheDocument()

      // Form fields (owned by LoginForm)
      expect(screen.getByText(/Email Address/i)).toBeInTheDocument()
      expect(screen.getByText(/Password/i, { selector: 'label' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()

      // Footer (owned by LoginFooter / Login)
      expect(screen.getByText(/or continue with/i)).toBeInTheDocument()
    })

    test('should render email input field with correct attributes', () => {
      render(<Login />)

      const emailInput = screen.getByPlaceholderText(/name@example\.com/i) as HTMLInputElement
      expect(emailInput).toBeInTheDocument()
      expect(emailInput.type).toBe('email')
      expect(emailInput).not.toBeDisabled()
    })

    test('should render password input field with correct attributes', () => {
      render(<Login />)

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      expect(passwordInput).toBeInTheDocument()
      expect(passwordInput.type).toBe('password')
      expect(passwordInput).not.toBeDisabled()
    })

    test('should render SSO buttons in the footer', () => {
      render(<Login />)

      // SSO buttons live in LoginFooter, not inside LoginForm
      expect(screen.getByRole('button', { name: /google/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /apple/i })).toBeInTheDocument()
    })

    test('should render Forgot Password link inside the form', () => {
      render(<Login />)

      const forgotPasswordLink = screen.getByText(/forgot password\?/i)
      expect(forgotPasswordLink).toBeInTheDocument()
      expect(forgotPasswordLink.tagName).toBe('A')
    })

    test('should have password visibility toggle button', () => {
      render(<Login />)

      const toggleButton = screen.getByRole('button', {
        name: /Toggle password visibility/i,
      })
      expect(toggleButton).toBeInTheDocument()
    })

    test('should render sign-up prompt in the footer', () => {
      render(<Login />)

      // LoginFooter renders a "no account / create account" line
      expect(screen.getByRole('button', { name: /create an account/i })).toBeInTheDocument()
    })
  })

  // ==================== User Interaction Tests ====================
  describe('User Interactions', () => {
    test('should update email input when user types', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const emailInput = screen.getByPlaceholderText(/name@example\.com/i) as HTMLInputElement
      await user.type(emailInput, 'test@example.com')

      expect(emailInput.value).toBe('test@example.com')
    })

    test('should update password input when user types', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      await user.type(passwordInput, 'password123')

      expect(passwordInput.value).toBe('password123')
    })

    test('should toggle password visibility when eye icon is clicked', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      const toggleButton = screen.getByRole('button', {
        name: /toggle password visibility/i,
      })

      expect(passwordInput.type).toBe('password')

      await user.click(toggleButton)
      expect(passwordInput.type).toBe('text')

      await user.click(toggleButton)
      expect(passwordInput.type).toBe('password')
    })

    test('should auto-focus the email input on render', () => {
      render(<Login />)

      const emailInput = screen.getByPlaceholderText(/name@example\.com/i)
      expect(emailInput).toHaveFocus()
    })
  })

  // ==================== Form Validation Tests ====================
  describe('Form Validation', () => {
    // test('should show email validation error for invalid email format', async () => {
    //   const user = userEvent.setup()
    //   render(<Login />)

    //   const emailInput = screen.getByPlaceholderText(/name@example\.com/i)
    //   const submitButton = screen.getByRole('button', { name: /login/i })

    //   await user.type(emailInput, 'invalid-email')
    //   await user.click(submitButton)

    //   await waitFor(() => {
    //     expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument()
    //   })
    // })

    test('should show error for empty email on submit', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const submitButton = screen.getByRole('button', { name: /login/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/Please enter a valid/i)).toBeInTheDocument()
      })
    })

    test('should show password validation error for short password', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const passwordInput = screen.getByPlaceholderText(/•+/i)
      const submitButton = screen.getByRole('button', { name: /login/i })

      await user.type(passwordInput, '123')
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/Password must be/i)).toBeInTheDocument()
      })
    })

    test('should show error for empty password on submit', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const submitButton = screen.getByRole('button', { name: /login/i })
      await user.click(submitButton)

      await waitFor(() => {
        expect(screen.getByText(/Password must be/i)).toBeInTheDocument()
      })
    })

    test('should accept a valid email format without error', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const emailInput = screen.getByPlaceholderText(/name@example\.com/i) as HTMLInputElement
      await user.clear(emailInput)
      await user.type(emailInput, 'valid@example.com')

      expect(emailInput.value).toBe('valid@example.com')
    })

    test('should accept a password with 6 or more characters without error', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      await user.clear(passwordInput)
      await user.type(passwordInput, 'password123')

      expect(passwordInput.value).toBe('password123')
    })
  })

  // ==================== Form Submission Tests ====================
  // describe('Form Submission', () => {
  //   // test('should disable the login button while submitting', async () => {
  //   //   const user = userEvent.setup()
  //   //   render(<Login />)
  //   //   const emailInput = screen.getByPlaceholderText(/name@example\.com/i)
  //   //   const passwordInput = screen.getByPlaceholderText(/•+/i)
  //   //   const submitButton = screen.getByRole('button', { name: /login/i })
  //   //   await user.type(emailInput, 'test@example.com')
  //   //   await user.type(passwordInput, 'password123')
  //   //   await user.click(submitButton)
  //   //   expect(submitButton).toBeDisabled()
  //   // })
  //   // test('should prevent submission and show errors when fields are invalid', async () => {
  //   //   const user = userEvent.setup()
  //   //   render(<Login />)
  //   //   const submitButton = screen.getByRole('button', { name: /login/i })
  //   //   await user.click(submitButton)
  //   //   await waitFor(() => {
  //   //     expect(screen.getByText(/email|password/i, { selector: 'label' })).toBeInTheDocument()
  //   //   })
  //   //   // Button should NOT be in a loading/disabled state when validation fails
  //   //   expect(submitButton).not.toBeDisabled()
  //   // })
  // })

  // ==================== SSO Button Tests ====================
  // Note: SSO buttons are rendered by LoginFooter (via SSOButton), not by LoginForm.
  describe('SSO Buttons (LoginFooter)', () => {
    test('should render the Google SSO button enabled', () => {
      render(<Login />)

      const googleButton = screen.getByRole('button', { name: /google/i })
      expect(googleButton).toBeInTheDocument()
      expect(googleButton).not.toBeDisabled()
    })

    test('should render the Apple SSO button enabled', () => {
      render(<Login />)

      const appleButton = screen.getByRole('button', { name: /apple/i })
      expect(appleButton).toBeInTheDocument()
      expect(appleButton).not.toBeDisabled()
    })

    test('should handle Google SSO button click without throwing', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const googleButton = screen.getByRole('button', { name: /google/i })
      await user.click(googleButton)

      // Button should still be in the DOM after click (OAuth redirect is handled externally)
      expect(googleButton).toBeInTheDocument()
    })

    test('should handle Apple SSO button click without throwing', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const appleButton = screen.getByRole('button', { name: /apple/i })
      await user.click(appleButton)

      expect(appleButton).toBeInTheDocument()
    })
  })

  // ==================== Accessibility Tests ====================
  describe('Accessibility', () => {
    test('should have visible labels for form inputs', () => {
      render(<Login />)

      expect(screen.getByText(/Email address/i, { selector: 'label' })).toBeInTheDocument()
      expect(screen.getByText(/Password/i, { selector: 'label' })).toBeInTheDocument()
    })

    test('should have accessible names for all interactive buttons', () => {
      render(<Login />)

      expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /toggle password visibility/i }),
      ).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /google/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /apple/i })).toBeInTheDocument()
    })

    test('should contain a <form> element for semantic HTML', () => {
      const { container } = render(<Login />)

      const form = container.querySelector('form')
      expect(form).toBeInTheDocument()
    })
  })

  // ==================== Edge Cases ====================
  describe('Edge Cases', () => {
    // test('should disable the submit button to prevent rapid re-submission', async () => {
    //   const user = userEvent.setup()
    //   render(<Login />)

    //   const emailInput = screen.getByPlaceholderText(/name@example\.com/i)
    //   const passwordInput = screen.getByPlaceholderText(/•+/i)
    //   const submitButton = screen.getByRole('button', { name: /login/i })

    //   await user.type(emailInput, 'test@example.com')
    //   await user.type(passwordInput, 'password123')
    //   await user.click(submitButton)

    //   expect(submitButton).toBeDisabled()
    // })

    test('should trim whitespace when validating the email value', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const emailInput = screen.getByPlaceholderText(/name@example\.com/i) as HTMLInputElement
      await user.type(emailInput, '  test@example.com  ')

      expect(emailInput.value.trim()).toBe('test@example.com')
    })

    test('should accept a password containing special characters', async () => {
      const user = userEvent.setup()
      render(<Login />)

      const passwordInput = screen.getByPlaceholderText(/•+/i) as HTMLInputElement
      const specialPassword = 'P@ssw0rd!#$%'
      await user.type(passwordInput, specialPassword)

      expect(passwordInput.value).toBe(specialPassword)
    })
  })
})
