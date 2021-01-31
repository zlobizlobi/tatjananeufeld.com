import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '@styles';

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
            object-position: left !important;
            width: 100vw !important;
        }
    `)}
`;

export const Section = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    position: relative;
    ${media.sm(`
        justify-content: center;
    `)}
`;

export const NameContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: absolute;
    z-index: 0;
    box-sizing: border-box;
    align-self: center;
    margin-top: 140px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 100px 20px 0 20px;

    ${media.sm(`
      align-self: center;
    `)}

    ${media.lg(`
      left: 50%;
      margin-top: 0;  
      padding: 0px;
      background-color: transparent;
    `)}
`;
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
`;

export const SubHeading = styled.p`
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
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 15px 17.5px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 1px;
    color: white;
    transition: all 0.3s ease;
    font-size: 11px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    text-align: left;
    max-width: 450px;
    line-height: 19px;

    & > span {
        position: relative;
        left: 0;
        transition: all 0.3s ease;
    }

    & > svg {
        position: relative;
        margin-left: 10px;
        font-size: 35px;
        left: 0;
        transition: left 0.3s ease;
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

        & > svg {
            font-size: 22px;
            margin-left: 10px;  
        }
    `)}
`;

export const Gradient = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background: rgb(59, 60, 62);
    background: linear-gradient(
        90deg,
        rgba(59, 60, 62, 0.45) 10%,
        rgba(59, 60, 62, 1) 50%,
        rgba(59, 60, 62, 1) 455%
    );
    width: 100vw;
    height: 100vh;
    display: none;

    ${media.lg(`
        display: block;
    `)}
`;
