import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    :root {
        --mainBackgroundColor: #232323;
        --textColor: #ffffff;
    }

    body,html {
        background-color: var(--mainBackgroundColor);
        color: var(--textColor);
    }
`;
