import styled from 'styled-components'
import Img from "gatsby-image"
import { media } from '../../styles'

export const Image = styled(Img)`   
    width: 100%;
    border-radius: 5px;
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
    display: flex;
    align-items: center;
    justify-content: center;
`
/*  & > img:  Adjust image positioning (if image covers area with defined height) and add font-family for polyfill */