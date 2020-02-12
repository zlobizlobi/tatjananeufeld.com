import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import { media } from '@styles'
import { IoIosArrowRoundForward } from 'react-icons/io'


export const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
`
export const PortretImage = styled(Img).attrs({
    imgStyle: {
        objectPosition: 'left left',
        objectFit: 'scale-down'
    }
})`
    width: 100%;
    height: auto;
    margin-bottom: 50px;  



    ${media.md(`
        width: 600px;
        height: 400px;
    `)}
`

export const LandingImage = styled(Img).attrs({
    imgStyle: {
        objectPosition: 'left left',
        objectFit: 'scale-down'
    }
})`
    width: 100%;
    height: auto;
    opacity: 0.7;
    transition: all 0.2s ease-in-out; 

    ${media.md(`
        width: 600px;
        height: 250px;
        opacity: 0.7;
    `)}
`
export const Text = styled.p`
    font-size: 14px;
    line-height: 24.5px;
    max-width: 600px;
    color: rgba(255,255,255,0.5);
    padding: 0 20px;
    margin-bottom: 50px;

    ${media.md(`
        padding: 0;
    `)}
`;

export const arrowRight = keyframes`
    from {
      left: 0px;
    }
    to {
      right: 20px;
    }
`;

export const Arrow = styled(IoIosArrowRoundForward)`
    position: relative;
    left: -5px;
    color: white;
    width: 30px;
    height: 30px;
    margin-right: 30px;
    transition: all 0.1s ease;
    opacity: 0;
`

export const Overlay = styled.div`
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    height: 50%;
    transition: all 0.2s ease;
`
export const CTAContainer = styled.a`
    position: relative;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
    height: auto;

    &:hover {
        ${LandingImage} {
            transform: scale(1.1);
        }
        ${Arrow} {
            opacity: 1;
            animation: ${arrowRight} 0.3s infinite alternate;
        }
    }

    ${media.md(`
        width: 600px;
        height: 250px;
    `)}
`

export const CTAText = styled.span`
    font-size: 14px;
    color: white;
    margin-right: 10px;
    text-transform: uppercase;
    padding-bottom: 2.5px;
    border-bottom: 1px solid white;
`

