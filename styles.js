import { createGlobalStyle } from "styled-components";
import { Bai_Jamjuree } from "next/font/google";

const plotDataFont = Bai_Jamjuree({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
   
    font-family: ${plotDataFont.style.fontFamily};
    
  }
`;
