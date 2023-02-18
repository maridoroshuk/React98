import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pixelated MS Sans Serif";
    src: url("styles/fonts/ms_sans_serif.woff") format("woff");
    src: url("styles/fonts/ms_sans_serif.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Pixelated MS Sans Serif";
    src: url("styles/fonts/ms_sans_serif_bold.woff") format("woff");
    src: url("styles/fonts/ms_sans_serif_bold.woff2") format("woff2");
    font-weight: bold;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    max-width: 1920px;
    overflow-x: hidden;
    margin: 0 auto;
  }
  html {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
