import React from "react";
import LoginContainer, { FullLoginContainer } from "@pages/login/styled";
import Slogan from "@components/slogan/Slogan";
import FormLogin from "@components/formLogin/FormLogin";

function Login(){
  return(
    <FullLoginContainer>
      <Slogan />
      <LoginContainer>
          <h3 className="login-title">Authentication</h3>
          <FormLogin />
          <a href="/" className="login-signUp">Sign Up {"->"}</a>
      </LoginContainer>
    </FullLoginContainer>
  )
}

export default Login;
