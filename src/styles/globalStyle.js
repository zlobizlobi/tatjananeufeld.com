import { createGlobalStyle } from 'styled-components'
import Montserrat from '../fonts/Montserrat-Regular.ttf'
import Baskervville from '../fonts/Baskervville-Regular.ttf'
import Cormorant from '../fonts/CormorantGaramond-Light.ttf'

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Montserrat';
        font-weight: normal;
        src: url(${Montserrat});
    }

    @font-face {
        font-family: 'Baskervville';
        font-weight: normal;
        src: url(${Baskervville});
    }

    @font-face {
        font-family: 'Cormorant Garamond';
        font-weight: normal;
        src: url(${Cormorant});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        font-family: 'Baskervville', serif;
        background-color: black;
        height: 100%;
        max-height: 100%;
    }
`