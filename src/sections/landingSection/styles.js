import styled from 'styled-components'
import Img from "gatsby-image"

export const Image = styled(Img)`   
    width: 100%;
    height: 100vh;

    picture > img {
        object-fit: cover !important;
        object-position: 50% 0% !important;
    }
`

export const ImageContainer = styled.div`
    z-index: -1;
    width: 100%;
    height: 100vh;
`
/*  & > img:  Adjust image positioning (if image covers area with defined height) and add font-family for polyfill */