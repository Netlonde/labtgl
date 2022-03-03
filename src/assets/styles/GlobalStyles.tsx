import styled, { createGlobalStyle } from "styled-components";

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
