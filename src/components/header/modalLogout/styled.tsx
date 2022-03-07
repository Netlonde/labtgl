import styled from "styled-components";

const ModalLogoutContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .modallogout-container{
    background-color: #ccc;
    height: 250px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    border-radius: 12px;
  }

  .modallogout-close{
    position: absolute;
    top: 15px;
    right: 20px;
  }

  .modallogout-close button{
    font-size: 18px;
    background-color: transparent;
    border: none;
    color: rgba(80,80,80,1)
  }

  .modallogout-close button:hover{
    color: rgba(0,0,0,1)
  }

  .modallogout-title h2{
    font: normal bold 30px/55px Helvetica Neue;
    color: rgba(30,30,30,1)
  }

  .modallogout-text p{
    font: normal 18px/75px Helvetica Neue;
  }

  .modallogout-options{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  }

  .modallogout-options button{
    font: inherit;
    padding: 0.5rem 1.2rem;
    border-radius: 5px;
    opacity: 0.9;
  }

  .modallogout-cancelButton{
    background-color: #b5c401;
    border: 1px solid #b5c401;
  }

  .modallgout-logoutButton{
    background-color: #dc3545;
    border: 1px solid #dc3545;
  }

  .modallogout-cancelButton:hover,
  .modallgout-logoutButton:hover{
    opacity: 1;
  }

  @media (max-width: 500px) {
    .modallogout-container{
      height: 250px;
      width: 300px;
    }
  }
`;

export default ModalLogoutContainer;
