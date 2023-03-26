import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
  overflow-y: scroll;
}

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  `;
