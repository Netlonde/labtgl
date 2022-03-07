import styled, { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import { errorColor, successColor } from "src/config/colors";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    width: 100%;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${errorColor};
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;


export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
