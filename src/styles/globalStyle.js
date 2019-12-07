import { createGlobalStyle } from 'styled-components'
import Raleway from '../fonts/Raleway-Regular.ttf'
import Playfair from '../fonts/PlayfairDisplay-Regular.ttf'

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Raleway';
        font-weight: normal;
        src: url(${Raleway});
    }

    @font-face {
        font-family: 'Playfair';
        font-weight: normal;
        src: url(${Playfair});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        font-family: 'Raleway';
        background-color: black;
        height: 100%;
        max-height: 100%;
    }
`
