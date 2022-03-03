import FormLoginContainer from "./Styled";

function FormLogin(){
  return(
    <FormLoginContainer>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password"/>
      <div className="formlogin-forgotPassword">
        <a href="/">I forget my password</a>
      </div>
      <div className="formlogin-buttonLogin">
        <button>Log In {"->"}</button>
      </div>
    </FormLoginContainer>
  )
}

export default FormLogin;
