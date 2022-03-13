import { FormEvent, useState } from "react";
import { toast } from 'react-toastify';

import updateMyAccount from "@services/account";
import MyAccountContainer from "./styled";
import { useNavigate } from "react-router-dom";

function MyAccount(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

    async function handleSubmit(e: FormEvent){
      e.preventDefault();

      try{
        const {updateUser} = updateMyAccount();
        await updateUser({name, email}).then(() => {
          toast.success('Dados alterados com sucesso');
          navigate('/home')
        })
      }catch{
        toast.success('Não foi possível alterar seus dados');
      }
    }



  return(
    <MyAccountContainer onSubmit={handleSubmit}>
      <h2>Altere seus dados</h2>

      <div>
        <input type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>

      <div>
        <button>Alterar dados</button>
      </div>

    </MyAccountContainer>
  )
}

export default MyAccount;
