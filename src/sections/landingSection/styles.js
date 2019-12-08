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
    z-index: 3;
    padding: 0 30px;
    
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
    margin: 0;
`

export const SubHeading = styled.h6`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 5px;
    color: white;
    line-height: 20px;
    margin: 10px 0;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    width: 170px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 13px;
    

    & > span {
        position: relative;
        left: 0;
        transition: all 0.2s ease;
    }

    & > svg {
        position: relative;
        left: 0;
        opacity: 0;
        display: none;
        transition: all 0.2s ease;
    }

    :hover {
        background-color: white;
        color: black;
    
        & > span {
            left: -5px;
        }

        & > svg {
            left: 5px;
            opacity: 1;
            display: inline;
        }
    }
`