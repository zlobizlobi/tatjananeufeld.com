import { createGlobalStyle } from "styled-components"
import MontserratRegular from "../fonts/Montserrat-Regular.ttf"
import MontserratLight from "../fonts/Montserrat-Light.ttf"
import MontserratBold from "../fonts/Montserrat-Bold.ttf"
import Cormorant from "../fonts/CormorantGaramond-Light.ttf"
import CormorantBold from "../fonts/CormorantGaramond-Bold.ttf"

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Montserrat';
        font-weight: normal;
        src: url(${MontserratRegular});
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: lighter;
        src: url(${MontserratLight});
    }
    @font-face {
        font-family: 'Montserrat';
        font-weight: bold;
        src: url(${MontserratBold});
    }

    @font-face {
        font-family: 'Cormorant Garamond';
        font-weight: normal;
        src: url(${Cormorant});
    }

    @font-face {
        font-family: 'Cormorant Garamond';
        font-weight: bold;
        src: url(${CormorantBold});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        background-color: black;
        height: 100%;
        max-height: 100%;
    }

    button {
        font-family: 'inherit';
    }
`
