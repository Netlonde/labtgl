import SignUpContainer from "./styled";

function FormSignUp(){
  return(
    <SignUpContainer>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password"/>

      <div className="formsignup-register">
        <button>Register {"->"}</button>
      </div>
    </SignUpContainer>
  )
}

export default FormSignUp;
