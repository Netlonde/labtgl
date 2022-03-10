import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import FormLoginContainer, {LoadingContainer} from "./Styled";
import { authActions } from "@store/AuthRedux";
import auth from "@services/auth";
import Loading from "@components/loading/Loading";

function FormLogin(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);

  async function handleLogin(e: React.FormEvent){
    e.preventDefault();
    const {login} = auth();

    try{
      setLoading(true);
      await login({email, password})
        .then((res) => {
          localStorage.setItem('token', String(res.token.token));
          toast.success('Login efetuado com sucesso');
          dispatch(authActions.LOGIN(res));
          setLoading(false);
          navigate('/home');
        })
        .catch(() => {
          toast.error('Login e/ou senha inválidos');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          dispatch(authActions.LOGOUT());
          setLoading(false);
        });

    }catch{
      toast.error('Não foi possível realizar o login.');
      setLoading(false);
    }
  }

  if(loading){
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    )
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
