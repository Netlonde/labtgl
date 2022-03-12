import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import forgotSchema from './validateForgot/ValidateForgot';
import FormForgotContainer from "./styled";

type UserData = {
  email: string,
}

function FormForgot(){
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>({
    resolver: yupResolver(forgotSchema)
  });


  function handleForgotPassword(){
    toast.success('Um email foi enviado para você')
    navigate('/login');
  }

  function displayErrorMessages(){
    const $emailInput: any = document.querySelector('.forgotEmail');
    if($emailInput?.value === '') toast.error(`${errors.email?.message || 'Email é obrigatório'}`)
  }

  return(
    <FormForgotContainer onSubmit={handleSubmit(handleForgotPassword)}>
      <input
        type="email"
        placeholder="Email"
        className='forgotEmail'
        {...register("email", { required: true })}
        required
      />

      <div className="formforgot-sendLink">
        <button onClick={displayErrorMessages}>Send link {"->"}</button>
      </div>
    </FormForgotContainer>
  )
}

export default FormForgot;
