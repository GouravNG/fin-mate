import SignupForm from '../forms/Signup.form'

const SignupPage = () => {
  return (
    <h1>
      Signup page
      <SignupForm disableSubmit={false} signupSubmitFn={(e) => console.log(e)} />
    </h1>
  )
}
export default SignupPage
