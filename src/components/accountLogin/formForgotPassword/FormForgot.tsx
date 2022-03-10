import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormForgotContainer from "./styled";


function FormForgot(){
  const navigate = useNavigate();

  function handleForgotPassword(){
    toast.success('Um email foi enviado para sua conta')
    navigate('/login');
  }

  return(
    <FormForgotContainer>
      <input type="email" placeholder="Email" />

      <div className="formforgot-sendLink">
        <button onClick={handleForgotPassword}>Send link {"->"}</button>
      </div>
    </FormForgotContainer>
  )
}

export default FormForgot;
