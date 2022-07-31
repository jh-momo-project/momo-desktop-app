import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  * {
    box-sizing: border-box;
    font-family: "SUIT"
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0
  }

  a {
    color: black;
    text-decoration: none;
  }

  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  ul, ol, dl {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
