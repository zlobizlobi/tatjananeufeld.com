import { createGlobalStyle } from 'styled-components';
import MontserratRegular from './fonts/Montserrat-Regular.ttf';
import MontserratLight from './fonts/Montserrat-Light.ttf';
import MontserratBold from './fonts/Montserrat-Bold.ttf';
import MontserratSemiBold from './fonts/Montserrat-SemiBold.ttf';

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

    html {
        &:not(.user-is-tabbing) {
            a[href],
            input:not([disabled]),
            select:not([disabled]),
            textarea:not([disabled]),
            button:not([disabled]),
            iframe {
              outline: none;
            }
        }

        .user-is-tabbing {
            a[href],
            area[href],
            input,
            select,
            textarea,
            button,
            iframe {
                :focus {
                    outline: 2px solid #b7b7b7;
                }
            }
        }
    }

    body, html {
        min-width: 100%;
        min-height: 100vh;
        scroll-behavior: smooth;
    }

     body {
        background-color: black;
        font-family: 'Montserrat', sans-serif;
     }

    button, input, textarea {
        font-family: inherit;
        font-weight: inherit;
        appearance: none;
    }

    button {
        background-color: transparent;
        cursor: pointer;
        border: none;
    }

    ul {
        margin: !important;
        padding: !important;
        list-style-type: none;
    }

    .carousel.carousel-slider{
        display: flex;
        justify-content: center;
    }

    .control-dots {
        width: unset !important;
    }
`;
