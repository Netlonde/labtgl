import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

import { authActions } from "@store/AuthRedux";
import auth from "@services/auth";
import SignUpContainer from "./styled";
import Loading from "@components/loading/Loading";

function FormSignUp(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);

  async function handleCreateAccount(e : React.FormEvent){
    e.preventDefault();
    setLoading(true)

    const {register} = auth();
    await register({name, email, password})
      .then(res =>{
        dispatch(authActions.REGISTER(res))
        navigate('/login');
        toast.success('Usuário cadastrado com sucesso');
        setLoading(false);
      })
      .catch(() =>{
        toast.error('Dados inválidos.');
        setLoading(false);
      })
  }

  if(loading) return <Loading />

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
