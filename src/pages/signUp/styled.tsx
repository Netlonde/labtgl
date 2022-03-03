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

  @media (max-width: 950px) {
    .signup-title{
      font: italic normal bold 35px/80px Helvetica Neue;
    }

  .signup-back{
      font: italic normal bold 35px/80px Helvetica Neue;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 600px) {
    .signup-title{
      font: italic normal bold 28px/80px Helvetica Neue;
    }

  .signup-back{
      font: italic normal bold 28px/80px Helvetica Neue;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 550px) {
    .signup-title{
      font: italic normal bold 23px/80px Helvetica Neue;
    }

  .signup-back{
      font: italic normal bold 23px/80px Helvetica Neue;
      margin-bottom: 3rem;
    }
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

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
