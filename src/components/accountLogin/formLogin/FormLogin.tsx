import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FormLoginContainer from "./Styled";
import { authActions } from "@store/AuthRedux";
import auth from "@services/auth";

function FormLogin(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleLogin(e: React.FormEvent){
    e.preventDefault();
    const {login} = auth();
    await login({email, password})
      .then((res) => {
        localStorage.setItem('token', String(res.token.token));
        dispatch(authActions.LOGIN(res))
      })
      .catch(err => alert(err));
    navigate('/home')
  }

  return(
    <FormLoginContainer onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="formlogin-forgotPassword">
        <a href="/forgot-password">I forget my password</a>
      </div>

      <div className="formlogin-buttonLogin">
        <button>Log In {"->"}</button>
      </div>
    </FormLoginContainer>
  )
}

export default FormLogin;
