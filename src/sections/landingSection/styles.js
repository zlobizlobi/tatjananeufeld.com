import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '@styles'

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
        justify-content: center;
    `)}
`

export const NameContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: absolute;
    z-index: 1;
    box-sizing: border-box;
    align-self: center;
    margin-top: 140px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 140px 20px 0 20px;

    ${media.sm(`
      align-self: center;
    `)}

    ${media.lg(`
      left: 50%;
      margin-top: 0;  
      padding: 0px;
      background-color: transparent;
    `)}
`
export const Name = styled.h1`
    color: white;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-family: 'Montserrat';
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: normal;

    ${media.lg(`
        font-size: 2em;
    `)}
`

export const SubHeading = styled.h6`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 5px;
    color: #a6a6a6;
    line-height: 20px;
    margin: 0 0 20px 0;
    font-size: 11px;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.8);

    ${media.sm(`
        font-size: 0.67em;
    `)}

    ${media.lg(`
        color: #a6a6a6;
        font-size: 0.67em;
    `)}
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12.5px 17.5px;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;

    & > span {
        position: relative;
        left: 0;
        transition: all 0.2s ease;
    }

    & > svg {
        position: relative;
        margin-left: 10px;
        font-size: 14px;
        left: 0;
        bottom: 1px;
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
        }
    }

    ${media.lg(`
        font-size: 12px;
    `)}
`
export const Gradient = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background: rgb(59, 60, 62);
    background: linear-gradient(
        90deg,
        rgba(59, 60, 62, 0.45) 39%,
        rgba(59, 60, 62, 1) 50%,
        rgba(59, 60, 62, 1) 455%
    );
    width: 100vw;
    height: 100vh;
    display: none;

    ${media.md(`
    display: block;
  `)}
`
export const ContentContainer = styled.div``
