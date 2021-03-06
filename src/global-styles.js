import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #0d4f71;
  }

  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  .item-enter {
    opacity: 0;
  }

  .item-enter-active {
    opacity: 0.6;
    transition: opacity 500ms ease-in;
  }

  .item-enter-done {
    opacity: 0.6;
  }
`;
