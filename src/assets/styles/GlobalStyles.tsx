import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    height: 100vh;
    width: 100vw;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
