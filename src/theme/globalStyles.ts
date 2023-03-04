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

  html {
    overflow-x: hidden;
  }

  body {
    font-family: Arial;
    font-size: 12px;
    color: #222222;
  }

  button,
  label,
  input,
  textarea,
  select,
  option,
  ul.tree-view,
  .window,
  .title-bar {
    font-family: "Pixelated MS Sans Serif", Arial;
    -webkit-font-smoothing: none;
    font-size: 11px;
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  u {
    text-decoration: none;
    border-bottom: 0.5px solid #222222;
  }

`;

export default GlobalStyle;
