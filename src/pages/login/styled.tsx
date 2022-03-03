import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  .login-title{
    text-align: center;
    font: italic normal bold 22px/80px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  .login-signUp{
    text-align: center;
    font: italic normal bold 22px/80px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  .login-signUp:hover{
    text-decoration: underline !important;
  }

  @media (max-width: 950px) {
    .login-title{
      font: italic normal bold 35px/80px Helvetica Neue;
    }

  .login-signUp{
      font: italic normal bold 35px/80px Helvetica Neue;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 600px) {
    .login-title{
      font: italic normal bold 28px/80px Helvetica Neue;
    }

  .login-signUp{
      font: italic normal bold 28px/80px Helvetica Neue;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 550px) {
    .login-title{
      font: italic normal bold 23px/80px Helvetica Neue;
    }

  .login-signUp{
      font: italic normal bold 23px/80px Helvetica Neue;
      margin-bottom: 3rem;
    }
  }
`;

export default LoginContainer;

export const FullLoginContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;


  @media (max-width: 950px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;
