import { createGlobalStyle } from 'styled-components'
import MontserratRegular from './fonts/Montserrat-Regular.ttf'
import MontserratLight from './fonts/Montserrat-Light.ttf'
import MontserratBold from './fonts/Montserrat-Bold.ttf'
import MontserratSemiBold from './fonts/Montserrat-SemiBold.ttf'

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
        font-weight: 600;
        src: url(${MontserratSemiBold});
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: bold;
        src: url(${MontserratBold});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        background-color: black;
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        min-height: 100%;
    }

    button, input, textarea {
        font-family: inherit;
        font-weight: inherit;
    }
`
