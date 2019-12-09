import styled from 'styled-components'
import Img from "gatsby-image"
import { media } from '../../styles'
export const Image = styled(Img)`   
    width: 100%;
    height: 100vh;

    picture > img {
        object-fit: cover !important;
        object-position: 50% 0% !important;
        height: 100vh !important;
    }

    ${media.md(`
        picture > img {
            object-fit: contain !important;
            object-position: 0% 0%  !important;
            width: 100vw !important;
        }
    `)}
`

export const Section = styled.section`
    z-index: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
/*  & > img:  Adjust image positioning (if image covers area with defined height) and add font-family for polyfill */

export const NameContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    z-index: 3;
    padding:  30px;
    margin-top: 130px;
    background-color: rgba(255,255,255,0.2);
    
    ${media.md(`
     margin: 0 0 0 120px;
     align-self: center;
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
    color: rgba(255,255,255,0.6);
    line-height: 20px;
    margin: 0 0 20px 0;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    width: 200px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 13px;
    box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);

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