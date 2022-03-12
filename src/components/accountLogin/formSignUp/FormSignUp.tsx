import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { authActions } from "@store/AuthRedux";
import auth from "@services/auth";
import SignUpContainer from "./styled";
import Loading from "@components/loading/Loading";
import signUpSchema from './validateSignUp/ValidateSignUp';

type UserData = {
  name: string,
  email: string,
  password: string
}

function FormSignUp(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>({
    resolver: yupResolver(signUpSchema)
  });

  async function handleCreateAccount(){
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
        toast.error('Email já existe');
        setLoading(false);
      })
  }

  function displayErrorMessages(){
    const $emailInput: any = document.querySelector('.email');
    const $passwordInput:any = document.querySelector('.password');
    const $nameInput:any = document.querySelector('.name');
    if($emailInput?.value === '') toast.error(`${errors.email?.message || 'Email é obrigatório'}`)
    if($nameInput?.value === '') toast.error(`${errors.name?.message || 'Nome é obrigatório'}`)
    if($passwordInput?.value === '') toast.error(`${errors.password?.message || 'Senha é obrigatória'}`)
    if($passwordInput?.value !== '' && $passwordInput?.value.length < 6) toast.error(`${'Senha precisa ter entre 6 e 18 caracteres'}`)
    if($passwordInput?.value !== '' && $passwordInput?.value.length > 18) toast.error(`${'Senha precisa ter entre 6 e 18 caracteres'}`)
  }

  if(loading) return <Loading />

  return(
    <SignUpContainer onSubmit={handleSubmit(handleCreateAccount)}>
      <input
        className="name"
        type="text"
        placeholder="Name"
        value={name}
        {...register("name", { required: true })}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="email"
        type="email"
        placeholder="Email"
        value={email}
        {...register("email", { required: true })}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="password"
        type="password"
        placeholder="Password"
        value={password}
        {...register("password", { required: true })}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="formsignup-register">
        <button onClick={displayErrorMessages}>Register {"->"}</button>
      </div>
    </SignUpContainer>
  )
}

export default FormSignUp;
