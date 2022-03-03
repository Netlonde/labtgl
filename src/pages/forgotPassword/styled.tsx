import styled from "styled-components";

const ForgotPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  .forgotpassword-title{
    text-align: center;
    font: italic normal bold 22px/80px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  .forgotpassword-back{
    text-align: center;
    font: italic normal bold 22px/80px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  .forgotpassword-back:hover{
    text-decoration: underline !important;
  }
`;

export default ForgotPasswordContainer;


export const FullForgotPasswordContainer = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
