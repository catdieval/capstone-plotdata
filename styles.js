import { createGlobalStyle } from "styled-components";
import { Bai_Jamjuree } from "next/font/google";

const plotDataFont = Bai_Jamjuree({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color:#1f77b4;
    --primary-color-shade:#1c6ba2;
    --secondary-color:#00bfff;
    --neutral-color:#F8F8F8;
    --info-color: #f9e154; 
  }

  body {
    background-color:var(--neutral-color);
    font-family: ${plotDataFont.style.fontFamily};
    
  }
`;
