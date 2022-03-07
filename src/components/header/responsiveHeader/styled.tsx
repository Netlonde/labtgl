import styled from "styled-components";

const ResponsiveHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: #343a40;

  button{
    padding-left: 1rem;
    background-color: transparent;
    border: none;
    font-size: 20px;
    color: #fff;
    transition: all ease-in-out 100ms;
  }

  button:hover{
    padding: 0.3rem 0.3rem 0.3rem 1.3rem;
    color: #b5c401;
  }

  .responsiveheader-close{
    position: absolute;
    right: 25px;
    top: 20px;
  }

  .responsiveheader-close button{
    font-size: 25px;
    color: #b5c401;
  }

  .responsiveheader-close button:hover{
    padding: 0 !important;
    opacity: 0.8;
  }

  .responsiveheader-accountButton{
    width: 100%;
    padding: 1.2rem;
    margin-top: 80px;
  }

  .responsiveheader-logoutButton{
    width: 100%;
    padding: 1.2rem;
  }


`;

export default ResponsiveHeaderContainer
