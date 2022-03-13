import styled from 'styled-components';

const MyAccountContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;

  input{
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #b5c401;
    outline: none;
    width: 100%;
    color: #404040;
    font: normal normal normal 14px/15px Helvetica Neue;
  }

  input:placeholder-shown{
    color: #404040;
    font: italic normal bold 14px/15px Helvetica Neue;
  }

  div{
    width: 100%;
    min-height: 4rem;
  }

  button{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    color: #404040;
    font: italic normal bold 18px/15px Helvetica Neue;
    background-color: #b5c401;
    border: 1px solid #b5c401;
    transition: all ease-in-out 200ms;
  }

  button:hover{
    opacity: 0.9;
  }

  h2{
    font: italic normal bold 25px/15px Helvetica Neue;
    color: #404040;
    margin-bottom: 2rem;
  }

  @media (max-width: 500px) {
    width: 300px;

    h2{
      font: italic normal bold 20px/15px Helvetica Neue;
    }
  }

`;

export default MyAccountContainer;
