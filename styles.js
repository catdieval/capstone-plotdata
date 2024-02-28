import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
   // margin: 0;
    font-family: system-ui;
    display: grid;
    margin: auto;
    place-items: center;
    min-height: 100vh;
    max-width: 50rem;
  }
`;
