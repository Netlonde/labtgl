import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

import { authActions } from "@store/AuthRedux";
import ModalLogoutContainer from "./styled";

function ModalLogout(props: any){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const container = document.getElementById("modalLogout-root") || document.createElement('div');
  const { handleClose } = props;

  function handleLogout(e: React.FormEvent){
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(authActions.LOGOUT());
    handleClose(false);
    navigate('/login');
    toast.success('Você deslogou.')
  }

  return ReactDOM.createPortal(
    <ModalLogoutContainer>
      <div className="modallogout-container">
        <div className="modallogout-close">
          <button onClick={() => handleClose(false)}>X</button>
        </div>

        <div className="modallogout-title">
          <h2>Sair</h2>
        </div>

        <div className="modallogout-text">
          <p>Tem certeza que deseja sair?</p>
        </div>

        <div className="modallogout-options">
          <button
            onClick={() => handleClose(false)}
            className="modallogout-cancelButton">
              Cancelar
          </button>

          <button
            onClick={handleLogout}
            className='modallgout-logoutButton'>
              Sair
          </button>
        </div>
      </div>
    </ModalLogoutContainer>,
    container)
}

export default ModalLogout;
