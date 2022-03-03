import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  .login-title{
    text-align: center;
    font: italic normal bold 27px/80px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  .login-signUp{
    text-align: center;
    font: italic normal bold 27px/80px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  .login-signUp:hover{
    text-decoration: underline !important;
  }
`;

export default LoginContainer;

export const FullLoginContainer = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
