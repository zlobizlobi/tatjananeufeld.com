import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '@styles'

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

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

`
export const CTAContainer = styled.a`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    transition: transform 0.2s ease; 
    
    &:hover {
        ${LandingImage} {
            transform: scale(1.1);
        }
    }
`