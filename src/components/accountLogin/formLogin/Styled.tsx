import styled from "styled-components";

const FormLoginContainer = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #DDDDDD;
  border-radius: 14px;
  opacity: 1;
  width: 16rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  input{
    width: 100%;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid #DDDDDD;
    border-radius: 14px 14px 0px 0px;
    margin-bottom: 2px;
    font: italic normal bold 14px/15px Helvetica Neue;
    color: #404040;
    outline: none;
  }

  .formlogin-forgotPassword{
    margin: 10px 0;
    width: 100%;
    text-align: right;
    margin-right: 30px;
    margin-bottom: 15px;
  }

  .formlogin-forgotPassword a{
    font: italic normal normal 14px/10px Helvetica Neue;
    letter-spacing: 0px;
    color: #C1C1C1;
    opacity: 1;
  }

  .formlogin-forgotPassword a:hover{
    text-decoration: underline;
  }

  .formlogin-buttonLogin{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .formlogin-buttonLogin button{
    padding-top: 15px;
    border: none;
    background-color: #fff;
    text-align: center;
    font: italic normal bold 24px/20px Helvetica Neue;
    letter-spacing: 0px;
    color: #B5C401;
    opacity: 1;
    padding-bottom: 20px;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 14px 14px;
    transition: all ease-in-out 200ms;
  }

  .formlogin-buttonLogin button:hover{
    background-color: #B5C401;
    color: #fff;
  }

  @media (max-width: 950px) {
    width: 30rem;
    max-height: 15rem;

    input{
      font: italic normal bold 17px/15px Helvetica Neue;
    }

    .formlogin-forgotPassword a{
      font: italic normal normal 17px/10px Helvetica Neue;
    }
  }

  @media (max-width: 550px) {
    width: 20rem;
    max-height: 15rem;

    input{
      font: italic normal bold 17px/15px Helvetica Neue;
    }

    .formlogin-forgotPassword a{
      font: italic normal normal 17px/10px Helvetica Neue;
    }
  }
`;

export default FormLoginContainer
