import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`

${reset}

body{
  background-color : #F6F6F6;
  font-family: 'Noto Sans KR';
  font-style: normal;
}

button{
  border: none;
  cursor: pointer;
}
`;
