import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaArrowRight } from 'react-icons/fa';

import FormLoginContainer, {LoadingContainer} from "./Styled";
import { authActions } from "@store/AuthRedux";
import auth from "@services/auth";
import Loading from "@components/loading/Loading";
import loginSchema from "./validateLogin/ValidateLogin";

type UserData = {
  email: string,
  password: string
}

function FormLogin(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>({
    resolver: yupResolver(loginSchema)
  });

  async function handleLogin(){
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
          dispatch(authActions.LOGOUT());
          setLoading(false);
        });

    }catch{
      toast.error('Não foi possível realizar o login.');
      setLoading(false);
    }
  }

  function displayErrorMessages(){
    const $emailInput: any = document.querySelector('.emailInput');
    const $passwordInput:any = document.querySelector('.passwordInput');
    if($emailInput?.value === '') toast.error(`${errors.email?.message || 'Email é obrigatório'}`)
    if($passwordInput?.value === '') toast.error(`${errors.password?.message || 'Senha é obrigatória'}`)
    if($passwordInput?.value !== '' && $passwordInput?.value.length < 6) toast.error(`${'Senha precisa ter entre 6 e 18 caracteres'}`)
    if($passwordInput?.value !== '' && $passwordInput?.value.length > 18) toast.error(`${'Senha precisa ter entre 6 e 18 caracteres'}`)
  }

  if(loading){
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    )
  }

  return(
    <FormLoginContainer onSubmit={handleSubmit(handleLogin)}>
      <input
        className="emailInput"
        type="email"
        placeholder="Email"
        value={email}
        {...register("email", { required: true })}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="passwordInput"
        type="password"
        placeholder="Password"
        value={password}
        {...register("password", { required: true })}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="formlogin-forgotPassword">
        <a href="/forgot-password">I forget my password</a>
      </div>

      <div className="formlogin-buttonLogin">
        <button type="submit" onClick={displayErrorMessages}>Log In <FaArrowRight /></button>
      </div>
    </FormLoginContainer>

  )
}

export default FormLogin;
