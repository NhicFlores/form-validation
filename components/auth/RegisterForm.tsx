//keep pages as server components, but tag their components as client components 
//define children in component props interface as React.ReactNode, but don't need 
//to assign in component element, the component just can't be empty -> just put a temp div
import CardWrapper from './CardWrapper'

const RegisterForm = () => {
  return (
    <CardWrapper
    header="Register"
    label="Create an account"
    backButtonHref="/auth/login"
    backButtonLabel="Already have an account? Log In"
    >
      <div>
        Register Form
      </div>
    </CardWrapper>
  )
}

export default RegisterForm
