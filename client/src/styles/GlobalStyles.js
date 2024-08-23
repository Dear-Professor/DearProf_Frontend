import { createGlobalStyle } from "styled-components";
import PreRegular from "../assets/fonts/Pretendard-Regular.otf";
import PreBold from "../assets/fonts/Pretendard-Bold.otf";
import PreVariable from "../assets/fonts/PretendardVariable.ttf";
import GmarketSansBold from "../assets/fonts/GmarketSansBold.otf";
import GmarketSansLight from "../assets/fonts/GmarketSansLight.otf";
import GmarketSansMedium from "../assets/fonts/GmarketSansMedium.otf";

const GlobalStyles = createGlobalStyle` 
@font-face {
        font-family: 'PreBold';
        font-style: normal;
        src: url(${PreBold}) format('opentype');
  }@font-face {
        font-family: 'PreVariable';
        font-style: normal;
        src: url(${PreVariable}) format('truetype');
  }@font-face {
        font-family: 'PreRegular';
        font-style: normal;
        src: url(${PreRegular}) format('opentype');
  }@font-face {
        font-family: 'GmarketSansBold';
        font-style: normal;
        src: url(${GmarketSansBold}) format('opentype');
  }
@font-face {
        font-family: 'GmarketSansLight';
        font-style: normal;
        src: url(${GmarketSansLight}) format('opentype');
  }@font-face {
        font-family: 'GmarketSansMedium';
        font-style: normal;
        src: url(${GmarketSansMedium}) format('opentype');
  }

    a{
        text-decoration: none;
        color: inherit;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        cursor: pointer;
        background: transparent;
    }
    html {
        font-size: 16px; 
        }
`;

export default GlobalStyles;
