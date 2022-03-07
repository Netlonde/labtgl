import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaBars } from 'react-icons/fa';

import { modalLogoutActions } from "@store/ModalLogoutRedux";
import { modalResponsiveOptionsActions } from "@store/ModalResponsiveOptionsRedux";
import ModalLogout from "./modalLogout/ModalLogout";
import ResponsiveHeader from "./responsiveHeader/ResponsiveHeader";
import HeaderContainer from "./styled";

function Header(){
  const isOppen = useSelector((state: any) => state.modalLogout);
  const isResponsiveOppen = useSelector((state: any) => state.modalResponsiveOptions)
  const dispatch = useDispatch();

  function handleClick(e: React.FormEvent){
    e.preventDefault();

    dispatch(modalLogoutActions.ISMODALOPEN(true))
  }

  function handleModalClose(isModalClose: Boolean){
    dispatch(modalLogoutActions.ISMODALOPEN(isModalClose))
  }

  function handleResponsiveClick(e: React.FormEvent){
    e.preventDefault();

    dispatch(modalResponsiveOptionsActions.ISMODALOPEN(true));
  }

  function handleResponsiveModalClose(isModalClose: Boolean){
    dispatch(modalResponsiveOptionsActions.ISMODALOPEN(isModalClose));
  }


  return(
    <HeaderContainer>
      <div className="header-logo">
        TGL

        <hr className="header-lineDivisor" />
      </div>

      <div className="header-options">
        <a href="#">Account</a>
        <a href="/login" onClick={handleClick}>Sair {'->'}</a>
      </div>

      <div className="header-responsiveOptions">
        <FaBars size={28} className="header-responsiveButton" onClick={handleResponsiveClick}/>
      </div>

      {isOppen.modalOpen && <ModalLogout handleClose={handleModalClose} />}
      {isResponsiveOppen.modalOpen && <ResponsiveHeader
        handleClose={handleResponsiveModalClose}
        handleLogout={handleClick}
      />}
    </HeaderContainer>
  )
}

export default Header;
