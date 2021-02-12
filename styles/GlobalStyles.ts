import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = css`
  ${reset}
  * {
    box-sizeing: border-box;
  }
  body {
    font-family: Noto sans-serif, Noto Sans KR;
    /* background: #000; */
  }
`;

const GlobalStyles = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyles;
