import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,button{
        font-family: "Manrope", sans-serif;
    }

    body{
        background-color: hsl(215,23%,16%);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default GlobalStyles; 