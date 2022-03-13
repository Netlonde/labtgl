import { FormEvent, useState } from "react";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import updateMyAccount from "@services/account";
import MyAccountContainer from "./styled";
import { useNavigate } from "react-router-dom";
import userSchema from "./validateMyAccount/ValidateMyAccount";

type UserData = {
  name: string,
  email: string
}

function MyAccount(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>({
    resolver: yupResolver(userSchema)
  });

    async function handleSubmitUser(){

      try{
        const {updateUser} = updateMyAccount();
        await updateUser({name, email}).then(() => {
          toast.success('Dados alterados com sucesso');
          navigate('/home')
        })
      }catch{
        toast.error('Nome e/ou Email inválidos');
      }
    }

    function displayErrorMessages(){
      const $emailInput: any = document.querySelector('.userEmail');
      const $nameInput: any = document.querySelector('.userName');
      if($emailInput?.value === '') toast.error(`${errors.email?.message || 'Email é obrigatório'}`)
      if($nameInput?.value === '') toast.error(`${errors.name?.message || 'Nome é obrigatório'}`)
    }

  return(
    <MyAccountContainer onSubmit={handleSubmit(handleSubmitUser)}>
      <h2>Altere seus dados</h2>

      <div>
        <input type="text"
          className="userName"
          placeholder="Name"
          value={name}
          {...register("name", { required: true })}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          className="userEmail"
          type="email"
          placeholder="Email"
          value={email}
          {...register("email", { required: true })}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <button onClick={displayErrorMessages}>Alterar dados</button>
      </div>

    </MyAccountContainer>
  )
}

export default MyAccount;
