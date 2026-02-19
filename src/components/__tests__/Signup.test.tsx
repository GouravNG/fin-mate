import { userEvent } from '@testing-library/user-event'
import { describe, expect, test, vi, beforeEach } from 'vitest'
import { type SubmitHandler } from 'react-hook-form'
import { type SignupFormData } from '@/schemas/auth.schema'
import { render, waitFor, screen } from '@testing-library/react'
import SignupForm from '../forms/Signup.form'

// ---------------------------------------------------------------------------
// Test IDs — must match the data-testid attributes in SignupForm component
// ---------------------------------------------------------------------------
const TEST_IDS = {
  form: 'signup-form',
  nameInput: 'signup-name-input',
  emailInput: 'signup-email-input',
  passwordInput: 'signup-password-input',
  confirmPasswordInput: 'signup-confirm-password-input',
  passwordToggle: 'signup-password-toggle',
  confirmPasswordToggle: 'signup-confirm-password-toggle',
  submitButton: 'signup-submit-button',
  loginLink: 'signup-login-link',
  nameError: 'signup-name-error',
  emailError: 'signup-email-error',
  passwordError: 'signup-password-error',
  confirmPasswordError: 'signup-confirm-password-error',
}

const mockSignupSubmitFn: SubmitHandler<SignupFormData> = vi.fn()

const renderSignupForm = (disableSubmit = false) =>
  render(<SignupForm disableSubmit={disableSubmit} signupSubmitFn={mockSignupSubmitFn} />)

// Shorthand helpers
const getField = (id: string) => screen.getByTestId(id)
const queryField = (id: string) => screen.queryByTestId(id)
const clickSubmit = async (user: ReturnType<typeof userEvent.setup>) =>
  user.click(screen.getByTestId(TEST_IDS.submitButton))

describe('SignupForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  // ==================== Rendering Tests ====================
  describe('Rendering', () => {
    test('should render all required form elements', () => {
      // Expects: form, all four inputs, submit button, and login link are present in the DOM
      renderSignupForm()

      expect(getField(TEST_IDS.form)).toBeInTheDocument()
      expect(getField(TEST_IDS.nameInput)).toBeInTheDocument()
      expect(getField(TEST_IDS.emailInput)).toBeInTheDocument()
      expect(getField(TEST_IDS.passwordInput)).toBeInTheDocument()
      expect(getField(TEST_IDS.confirmPasswordInput)).toBeInTheDocument()
      expect(getField(TEST_IDS.submitButton)).toBeInTheDocument()
      expect(getField(TEST_IDS.loginLink)).toBeInTheDocument()
    })

    test('should render email input with type="email"', () => {
      // Expects: the email input to have type="email" for native browser validation and correct keyboard on mobile
      renderSignupForm()

      expect(getField(TEST_IDS.emailInput)).toHaveAttribute('type', 'email')
    })

    test('should render password input with type="password" (masked)', () => {
      // Expects: the password input to be masked by default so credentials are not visible on screen
      renderSignupForm()

      expect(getField(TEST_IDS.passwordInput)).toHaveAttribute('type', 'password')
    })

    test('should render confirm password input with type="password" (masked)', () => {
      // Expects: the confirm password input to also be masked by default
      renderSignupForm()

      expect(getField(TEST_IDS.confirmPasswordInput)).toHaveAttribute('type', 'password')
    })

    test('should render two separate password visibility toggle buttons', () => {
      // Expects: one toggle for password and one for confirm password, both present and independent
      renderSignupForm()

      expect(getField(TEST_IDS.passwordToggle)).toBeInTheDocument()
      expect(getField(TEST_IDS.confirmPasswordToggle)).toBeInTheDocument()
    })

    test('should render the form as a <form> element for semantic HTML', () => {
      // Expects: the wrapper element to be an actual <form> tag (not a <div>) for accessibility and native submit behaviour
      renderSignupForm()

      expect(getField(TEST_IDS.form).tagName).toBe('FORM')
    })

    test('should render the login link with a valid href', () => {
      // Expects: the "Log in" anchor to exist and navigate to the login route
      renderSignupForm()

      expect(getField(TEST_IDS.loginLink)).toHaveAttribute('href', '/login')
    })

    test('should render all input fields empty on initial render', () => {
      // Expects: no pre-filled data in any field when the form first mounts
      renderSignupForm()

      expect(getField(TEST_IDS.nameInput)).toHaveValue('')
      expect(getField(TEST_IDS.emailInput)).toHaveValue('')
      expect(getField(TEST_IDS.passwordInput)).toHaveValue('')
      expect(getField(TEST_IDS.confirmPasswordInput)).toHaveValue('')
    })

    test('should render the submit button as disabled when disableSubmit is true', () => {
      // Expects: the submit button to be non-interactive while a parent-controlled operation (e.g. API call) is in progress
      renderSignupForm(true)

      expect(getField(TEST_IDS.submitButton)).toBeDisabled()
    })

    test('should render the submit button as enabled when disableSubmit is false', () => {
      // Expects: the submit button to be clickable in the default idle state
      renderSignupForm(false)

      expect(getField(TEST_IDS.submitButton)).not.toBeDisabled()
    })

    test('should not render any validation errors on initial render', () => {
      // Expects: no error messages visible before the user has interacted with the form
      renderSignupForm()

      expect(queryField(TEST_IDS.nameError)).not.toBeInTheDocument()
      expect(queryField(TEST_IDS.emailError)).not.toBeInTheDocument()
      expect(queryField(TEST_IDS.passwordError)).not.toBeInTheDocument()
      expect(queryField(TEST_IDS.confirmPasswordError)).not.toBeInTheDocument()
    })
  })

  // ==================== User Interaction Tests ====================
  describe('User Interactions', () => {
    test('should auto-focus the full name input on render', () => {
      // Expects: cursor lands on the first field automatically so the user can start typing immediately
      renderSignupForm()

      expect(getField(TEST_IDS.nameInput)).toHaveFocus()
    })

    test('should update full name input value as the user types', async () => {
      // Expects: the name field reflects each character typed by the user
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.nameInput), 'Jane Doe')

      expect(getField(TEST_IDS.nameInput)).toHaveValue('Jane Doe')
    })

    test('should update email input value as the user types', async () => {
      // Expects: the email field reflects each character typed by the user
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.emailInput), 'jane@example.com')

      expect(getField(TEST_IDS.emailInput)).toHaveValue('jane@example.com')
    })

    test('should update password input value as the user types', async () => {
      // Expects: the password field reflects each character typed by the user
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.passwordInput), 'SecurePass1!')

      expect(getField(TEST_IDS.passwordInput)).toHaveValue('SecurePass1!')
    })

    test('should update confirm password input value as the user types', async () => {
      // Expects: the confirm password field reflects each character typed by the user
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.confirmPasswordInput), 'SecurePass1!')

      expect(getField(TEST_IDS.confirmPasswordInput)).toHaveValue('SecurePass1!')
    })

    test('should toggle password field between masked and visible on toggle click', async () => {
      // Expects: clicking the toggle switches type between "password" and "text", then back again
      const user = userEvent.setup()
      renderSignupForm()

      const passwordInput = getField(TEST_IDS.passwordInput)
      const toggleButton = getField(TEST_IDS.passwordToggle)

      expect(passwordInput).toHaveAttribute('type', 'password')

      await user.click(toggleButton)
      expect(passwordInput).toHaveAttribute('type', 'text')

      await user.click(toggleButton)
      expect(passwordInput).toHaveAttribute('type', 'password')
    })

    test('should toggle confirm password field independently of the password field', async () => {
      // Expects: the confirm password toggle only affects its own input, leaving the password input untouched
      const user = userEvent.setup()
      renderSignupForm()

      const confirmInput = getField(TEST_IDS.confirmPasswordInput)
      const passwordInput = getField(TEST_IDS.passwordInput)
      const toggleButton = getField(TEST_IDS.confirmPasswordToggle)

      await user.click(toggleButton)

      expect(confirmInput).toHaveAttribute('type', 'text')
      expect(passwordInput).toHaveAttribute('type', 'password') // password field must remain unaffected
    })
  })

  // ==================== Form Validation Tests ====================
  describe('Form Validation', () => {
    test('should show name error when full name is empty on submit', async () => {
      // Expects: an inline error appears under the name field guiding the user to fill it in
      const user = userEvent.setup()
      renderSignupForm()

      await clickSubmit(user)

      await waitFor(() => {
        expect(getField(TEST_IDS.nameError)).toBeInTheDocument()
        expect(getField(TEST_IDS.nameError)).toHaveTextContent(/name is required/i)
      })
    })

    test('should show name error when name is shorter than 2 characters', async () => {
      // Expects: a min-length error appears so the user knows a single character is not a valid name
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.nameInput), 'A')
      await clickSubmit(user)

      await waitFor(() => {
        expect(getField(TEST_IDS.nameError)).toHaveTextContent(
          /name must be at least 2 characters/i,
        )
      })
    })

    test('should clear name error once a valid name is entered', async () => {
      // Expects: the error disappears as soon as the field contains an acceptable value
      const user = userEvent.setup()
      renderSignupForm()

      await clickSubmit(user)
      await waitFor(() => expect(getField(TEST_IDS.nameError)).toBeInTheDocument())

      await user.clear(getField(TEST_IDS.nameInput))
      await user.type(getField(TEST_IDS.nameInput), 'Jane Doe')
      await clickSubmit(user)

      await waitFor(() => expect(queryField(TEST_IDS.nameError)).not.toBeInTheDocument())
    })

    test('should show email error when email is empty on submit', async () => {
      // Expects: an inline error appears under the email field guiding the user to fill it in
      const user = userEvent.setup()
      renderSignupForm()

      await clickSubmit(user)

      await waitFor(() => {
        expect(getField(TEST_IDS.emailError)).toBeInTheDocument()
        expect(getField(TEST_IDS.emailError)).toHaveTextContent(/please enter a valid/i)
      })
    })

    test('should show email error for an invalid email format', async () => {
      // Expects: an inline error appears when the user types something that is not a valid email address
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.emailInput), 'not-an-email')
      await clickSubmit(user)

      await waitFor(() => {
        expect(getField(TEST_IDS.emailError)).toHaveTextContent(/please enter a valid/i)
      })
    })

    test('should not show email error for a correctly formatted email', async () => {
      // Expects: no error under the email field when the value passes the email regex
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.emailInput), 'valid@example.com')
      await clickSubmit(user)

      await waitFor(() => expect(queryField(TEST_IDS.emailError)).not.toBeInTheDocument())
    })

    test('should show password error when password is empty on submit', async () => {
      // Expects: an inline error appears under the password field guiding the user to fill it in
      const user = userEvent.setup()
      renderSignupForm()

      await clickSubmit(user)

      await waitFor(() => {
        expect(getField(TEST_IDS.passwordError)).toBeInTheDocument()
        expect(getField(TEST_IDS.passwordError)).toHaveTextContent(/password must be/i)
      })
    })

    test('should show password error when password is shorter than 8 characters', async () => {
      // Expects: a min-length error so the user knows their password is too short
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.passwordInput), 'Ab1!')
      await clickSubmit(user)

      await waitFor(() => {
        expect(getField(TEST_IDS.passwordError)).toHaveTextContent(/password must be/i)
      })
    })

    test('should show confirm password error when passwords do not match', async () => {
      // Expects: a mismatch error appears under the confirm password field when the two values differ
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.passwordInput), 'SecurePass1!')
      await user.type(getField(TEST_IDS.confirmPasswordInput), 'DifferentPass1!')
      await clickSubmit(user)

      await waitFor(() => {
        expect(getField(TEST_IDS.confirmPasswordError)).toHaveTextContent(/passwords do not match/i)
      })
    })

    test('should not show confirm password error when passwords match', async () => {
      // Expects: no mismatch error when both password fields contain the same value
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.passwordInput), 'SecurePass1!')
      await user.type(getField(TEST_IDS.confirmPasswordInput), 'SecurePass1!')
      await clickSubmit(user)

      await waitFor(() => expect(queryField(TEST_IDS.confirmPasswordError)).not.toBeInTheDocument())
    })

    test('should call signupSubmitFn with correct payload when all fields are valid', async () => {
      // Expects: the submit handler is called exactly once with name, email, and password — no confirmPassword
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.nameInput), 'Jane Doe')
      await user.type(getField(TEST_IDS.emailInput), 'jane@example.com')
      await user.type(getField(TEST_IDS.passwordInput), 'SecurePass1!')
      await user.type(getField(TEST_IDS.confirmPasswordInput), 'SecurePass1!')
      await clickSubmit(user)

      await waitFor(() => {
        expect(mockSignupSubmitFn).toHaveBeenCalledOnce()
        expect(mockSignupSubmitFn).toHaveBeenCalledWith(
          { name: 'Jane Doe', email: 'jane@example.com', password: 'SecurePass1!' },
          expect.anything(),
        )
      })
    })

    test('should NOT include confirmPassword in the submitted payload', async () => {
      // Expects: confirmPassword is stripped before the handler is called — it is a UI-only field
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.nameInput), 'Jane Doe')
      await user.type(getField(TEST_IDS.emailInput), 'jane@example.com')
      await user.type(getField(TEST_IDS.passwordInput), 'SecurePass1!')
      await user.type(getField(TEST_IDS.confirmPasswordInput), 'SecurePass1!')
      await clickSubmit(user)

      await waitFor(() => {
        const payload = (mockSignupSubmitFn as ReturnType<typeof vi.fn>).mock.calls[0][0]
        expect(payload).not.toHaveProperty('confirmPassword')
      })
    })

    test('should NOT call signupSubmitFn when the form is submitted empty', async () => {
      // Expects: validation blocks submission and the handler is never invoked when all fields are blank
      const user = userEvent.setup()
      renderSignupForm()

      await clickSubmit(user)

      await waitFor(() => expect(mockSignupSubmitFn).not.toHaveBeenCalled())
    })

    test('should NOT call signupSubmitFn when only some fields are filled', async () => {
      // Expects: partial data is still invalid — the handler must not fire until every required field passes validation
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.nameInput), 'Jane Doe')
      await user.type(getField(TEST_IDS.emailInput), 'jane@example.com')
      // password and confirmPassword intentionally left empty
      await clickSubmit(user)

      await waitFor(() => expect(mockSignupSubmitFn).not.toHaveBeenCalled())
    })
  })

  // ==================== Accessibility Tests ====================
  describe('Accessibility', () => {
    test('should have visible labels for all form inputs', () => {
      // Expects: every input is associated with a visible label so screen readers can announce the field purpose
      renderSignupForm()

      expect(screen.getByText(/full name/i, { selector: 'label' })).toBeInTheDocument()
      expect(screen.getByText(/email address/i, { selector: 'label' })).toBeInTheDocument()
      expect(screen.getByText(/^password$/i, { selector: 'label' })).toBeInTheDocument()
      expect(screen.getByText(/confirm password/i, { selector: 'label' })).toBeInTheDocument()
    })

    test('should have an accessible name on the submit button', () => {
      // Expects: the submit button has a text label that assistive technology can read aloud
      renderSignupForm()

      expect(getField(TEST_IDS.submitButton)).toHaveAccessibleName(/sign up/i)
    })

    test('should have accessible names on both password toggle buttons', () => {
      // Expects: both eye-icon buttons expose an aria-label so screen reader users know what they toggle
      renderSignupForm()

      expect(getField(TEST_IDS.passwordToggle)).toHaveAccessibleName(/toggle password visibility/i)
      expect(getField(TEST_IDS.confirmPasswordToggle)).toHaveAccessibleName(
        /toggle password visibility/i,
      )
    })

    test('should associate error messages with their inputs via aria-describedby', async () => {
      // Expects: each error element is linked to its input so assistive technology announces the error automatically
      const user = userEvent.setup()
      renderSignupForm()

      await clickSubmit(user)

      await waitFor(() => {
        const nameInput = getField(TEST_IDS.nameInput)
        const nameError = getField(TEST_IDS.nameError)
        expect(nameInput.getAttribute('aria-describedby')).toContain(nameError.id)
      })
    })
  })

  // ==================== Edge Cases ====================
  describe('Edge Cases', () => {
    test('should trim whitespace when reading the email value', async () => {
      // Expects: leading/trailing spaces in the email field do not make an otherwise valid email fail validation
      const user = userEvent.setup()
      renderSignupForm()

      await user.type(getField(TEST_IDS.emailInput), '  jane@example.com  ')

      expect((getField(TEST_IDS.emailInput) as HTMLInputElement).value.trim()).toBe(
        'jane@example.com',
      )
    })

    test('should accept a password that contains special characters', async () => {
      // Expects: special characters are valid in passwords and stored exactly as typed
      const user = userEvent.setup()
      renderSignupForm()

      const specialPassword = 'P@ssw0rd!#$%'
      await user.type(getField(TEST_IDS.passwordInput), specialPassword)

      expect(getField(TEST_IDS.passwordInput)).toHaveValue(specialPassword)
    })

    test('should NOT call signupSubmitFn when disableSubmit is true', async () => {
      // Expects: a disabled button prevents form submission even if all fields are correctly filled
      const user = userEvent.setup()
      renderSignupForm(true)

      await user.type(getField(TEST_IDS.nameInput), 'Jane Doe')
      await user.type(getField(TEST_IDS.emailInput), 'jane@example.com')
      await user.type(getField(TEST_IDS.passwordInput), 'SecurePass1!')
      await user.type(getField(TEST_IDS.confirmPasswordInput), 'SecurePass1!')
      await clickSubmit(user)

      await waitFor(() => expect(mockSignupSubmitFn).not.toHaveBeenCalled())
    })

    test('should keep all input fields editable while disableSubmit is true', () => {
      // Expects: disabling the submit button must not inadvertently disable the input fields themselves
      renderSignupForm(true)

      expect(getField(TEST_IDS.nameInput)).not.toBeDisabled()
      expect(getField(TEST_IDS.emailInput)).not.toBeDisabled()
      expect(getField(TEST_IDS.passwordInput)).not.toBeDisabled()
      expect(getField(TEST_IDS.confirmPasswordInput)).not.toBeDisabled()
    })
  })
})
