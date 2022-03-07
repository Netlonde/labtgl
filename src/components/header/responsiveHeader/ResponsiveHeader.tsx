import React from "react";
import ReactDOM from "react-dom";
import ResponsiveHeaderContainer from "./styled";

function ResponsiveHeader(props: any){
  const container = document.getElementById("modalResponsiveOptions-root") ||
                    document.createElement('div');

  const { handleClose, handleLogout } = props;

  function handleResponsiveLogout(e: React.FormEvent){
    e.preventDefault();

    handleClose(false);
    handleLogout(e);
  }

  return ReactDOM.createPortal(
    <ResponsiveHeaderContainer>
      <div className="responsiveheader-close">
        <button onClick={() => handleClose(false)}>X</button>
      </div>

      <div className="responsiveheader-accountButton">
        <button>Account</button>
      </div>

      <div className="responsiveheader-logoutButton">
        <button onClick={handleResponsiveLogout}>Sair</button>
      </div>
    </ResponsiveHeaderContainer>,
    container
  )
}

export default ResponsiveHeader;
