import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Ubuntu');   

    :root {
        --maxWidth: 1080px;
        --white: #fff;
        --lightMain: #eee;
        --medMain: #353535;
        --darkMain: #1c1c1c;
        --medEmphasized: #e63946;

        --fontHuge: 5rem;
        --fontVeryBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;

        --headerHeight: 100px;
    }

    * {
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
        color: var(--lightMain);
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--lightMain);
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }
    }

`;