import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
    }


    button {
        cursor: pointer;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        border: 0;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;