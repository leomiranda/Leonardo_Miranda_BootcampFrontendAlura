import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* Customs */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontFamilyHeaders};
    font-weight: 400;
    text-transform: uppercase;
  }
`;
export default GlobalStyle;
