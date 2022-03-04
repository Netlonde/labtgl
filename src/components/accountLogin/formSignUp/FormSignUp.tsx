import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { authActions } from "@store/AuthRedux";
import SignUpContainer from "./styled";

function FormSignUp(){
  const dispatch = useDispatch();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleCreateAccount(e : React.FormEvent){
    e.preventDefault();

    dispatch(authActions.REGISTER({name, email, password}))
  }

  return(
    <SignUpContainer onSubmit={handleCreateAccount}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <div className="formsignup-register">
        <button>Register {"->"}</button>
      </div>
    </SignUpContainer>
  )
}

export default FormSignUp;
