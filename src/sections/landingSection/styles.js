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

    ${media.lg(`
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
    justify-content: flex-start;
    
    ${media.sm(`
        justify-content: flex-end;
    `)}

    ${media.lg(`
      justify-content: center;
   `)}

`
/*  & > img:  Adjust image positioning (if image covers area with defined height) and add font-family for polyfill */

export const NameContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: absolute;
    z-index: 3;
    padding: 30px;
    margin-top: 140px;
    box-sizing: border-box;
    
    align-self: center;

    ${media.sm(`
        margin: 0;
        align-self: flex-end;
    `)}   
    
    ${media.lg(`
        align-self: center
    `)}
 
`
export const Name = styled.h1`
    color: white;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-family: 'Cormorant Garamond';
    margin-bottom: 10px;
    font-size: 18px;
    position: relative;
    left: 0;

    ${media.lg(`
        font-size: 2em;
    `)}
`

export const SubHeading = styled.h6`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 5px;
    color:  #a6a6a6;
    line-height: 20px;
    margin: 0 0 20px 0;
    font-size: 11px;
    font-weight: normal;

    ${media.lg(`
        font-size: 0.67em;
    `)}
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 10px;
    box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);

    & > span {
        position: relative;
        left: 0;
        transition: all 0.2s ease;
    }

    & > svg {
        margin-top: 3px;
        position: relative;
        left: 0;
        display: none;
        opacity: 0;
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
            display: inline;
            opacity: 1;
        }
    }

    ${media.lg(`
        font-size: 13px;
        width: 200px;

        & > svg {
            margin-top: 3px;
        }
    `)}
`