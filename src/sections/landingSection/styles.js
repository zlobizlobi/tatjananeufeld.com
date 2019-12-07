import styled from 'styled-components'
import Img from "gatsby-image"
import { media } from '../../styles'
export const Image = styled(Img)`   
    width: 100%;
    height: 100vh;

    picture > img {
        object-fit: cover !important;
        object-position: 50% 0% !important;
    }
`

export const ImageContainer = styled.div`
    z-index: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

${media.sm(`
        justify-content: flex-end;
    `)}
`
/*  & > img:  Adjust image positioning (if image covers area with defined height) and add font-family for polyfill */

export const NameContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    z-index: 1;
    
    ${media.sm(`
        justify-content: flex-end;
        padding-right: 100px;
    `)}
`
export const Name = styled.h1`
    color: white;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-family: 'Cormorant Garamond';
    margin-bottom: 5px;
`

export const SubHeading = styled.h6`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 5px;
    color: white;
    line-height: 20px;
`