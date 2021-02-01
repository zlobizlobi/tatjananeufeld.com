import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
      
      
    &:not(.user-is-tabbing) {
        a[href],
        input:not([disabled]),
        textarea:not([disabled]),
        button:not([disabled]),
        [tabindex],
        [contentEditable='true'] {
          outline: none;
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

     body.user-is-tabbing {
         button,a,textarea,input{
             :focus {
                 outline: 1px solid #b7b7b7;
             }
         }
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
        margin: 0;
        padding: 0;
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
