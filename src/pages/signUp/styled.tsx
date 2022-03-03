import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  .signup-title{
    text-align: center;
    font: italic normal bold 22px/80px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  .signup-back{
    text-align: center;
    font: italic normal bold 22px/80px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  .signup-back:hover{
    text-decoration: underline !important;
  }
`;

export default SignUpContainer;

export const FullSignUpContainer = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
