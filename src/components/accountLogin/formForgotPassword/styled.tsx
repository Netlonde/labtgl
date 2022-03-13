import styled from "styled-components";

const FormForgotContainer = styled.form`
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #DDDDDD;
  border-radius: 14px;
  width: 16rem;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 8px;

  input{
    width: 100%;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid #DDDDDD;
    font: italic normal bold 14px/15px Helvetica Neue;
    color: #404040;
    outline: none;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .formforgot-sendLink{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .formforgot-sendLink button{
    border: none;
    background-color: #fff;
    text-align: center;
    font: italic normal bold 22px/20px Helvetica Neue;
    letter-spacing: 0px;
    color: #B5C401;
    opacity: 1;
    transition: all ease-in-out 200ms;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 14px 14px;
  }

  .formforgot-sendLink button:hover{
    background-color: #B5C401;
    color: #fff;
  }

  @media (max-width: 950px) {
    width: 30rem;
    max-height: 15rem;

    input{
      font: italic normal bold 17px/15px Helvetica Neue;
    }
  }

  @media (max-width: 550px) {
    width: 20rem;
    max-height: 15rem;

    input{
      font: italic normal bold 17px/15px Helvetica Neue;
    }
  }
`;

export default FormForgotContainer
