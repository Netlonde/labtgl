import React from "react";
import { FaArrowRight } from 'react-icons/fa';

import LoginContainer, { FullLoginContainer } from "@pages/login/styled";
import Slogan from "@components/accountLogin/slogan/Slogan";
import FormLogin from "@components/accountLogin/formLogin/FormLogin";

function Login(){
  return(
    <FullLoginContainer>
      <Slogan />
      <LoginContainer>
          <h3 className="login-title">Authentication</h3>
          <FormLogin />
          <a href="/sign-up" className="login-signUp">Sign Up <FaArrowRight /></a>
      </LoginContainer>
    </FullLoginContainer>
  )
}

export default Login;
