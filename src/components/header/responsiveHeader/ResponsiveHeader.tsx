import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import ResponsiveHeaderContainer from "./styled";

function ResponsiveHeader(props: any){
  const navigate = useNavigate();
  const container = document.getElementById("modalResponsiveOptions-root") ||
                    document.createElement('div');

  const { handleClose, handleLogout } = props;

  function handleResponsiveLogout(e: React.FormEvent){
    e.preventDefault();
    handleLogout(e);
    handleClose(false);
  }

  function handleGoToHome(){
    navigate('/home');
  }

  function handleGoToNewBet(){
    navigate('/new-bets');
  }

  function handleGoToAccount(){
    navigate('/account');
  }

  return ReactDOM.createPortal(
    <ResponsiveHeaderContainer>
      <div className="responsiveheader-close">
        <button onClick={() => handleClose(false)}>X</button>
      </div>

      <div className="header-homeLink">
        {(window.location.href !== 'http://localhost:3000/home') &&
          <button onClick={handleGoToHome} >home</button>}
      </div>

        {(window.location.href !== 'http://localhost:3000/new-bets') &&
          <div className="header-newBetLink">
              <button onClick={handleGoToNewBet} >New Bet</button>
          </div>
        }

      {(window.location.href !== 'http://localhost:3000/account') &&
        <div className="responsiveheader-accountButton">
          <button onClick={handleGoToAccount}>Account</button>
        </div>
      }

      <div className="responsiveheader-logoutButton">
        <button onClick={handleResponsiveLogout}>Sair</button>
      </div>
    </ResponsiveHeaderContainer>,
    container
  )
}

export default ResponsiveHeader;
