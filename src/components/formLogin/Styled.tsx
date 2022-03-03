import styled from "styled-components";

const FormLoginContainer = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #DDDDDD;
  border-radius: 14px;
  opacity: 1;
  width: 16rem;
  height: 16rem;
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
    margin-bottom: 8px;
    font: italic normal bold 14px/15px Helvetica Neue;
    color: #404040;
    outline: none;
  }

  .formlogin-forgotPassword{
    margin: 10px 0;
    width: 100%;
    text-align: right;
    margin-right: 30px;
  }

  .formlogin-forgotPassword a{
    font: italic normal normal 14px/30px Helvetica Neue;
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
    border: none;
    background-color: #fff;
    text-align: center;
    font: italic normal bold 27px/20px Helvetica Neue;
    letter-spacing: 0px;
    color: #B5C401;
    opacity: 1;
    padding-bottom: 20px;
  }

  .formlogin-buttonLogin button:hover{
    text-decoration: underline;
  }
`;

export default FormLoginContainer
