import styled from 'styled-components';
import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import Img from 'gatsby-image';

const Carousel = styled(CarouselComponent)`
    width: 100%;
    position: relative;

    iframe {
        margin: 0 !important;
        width: 100% !important;
        min-height: 550px;
    }
`;

const CarouselItemContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const Image = styled(Img).attrs({
    imgStyle: {
        objectFit: 'contain',
        height: '100%',
        width: '100%'
    }
})`
    height: 100%;
    width: 100%; 
`

const DownloadLink = styled.a`
    display: block;
    position: absolute;
    bottom: 50px;
    z-index: 1000;
    width: 100%;
    left: 0;
    cursor: pointer;

    :hover {
        > svg {
            opacity: 1;
        }
    }

    > svg {
        color: white;
        transition: opacity 0.3s ease-in-out;
        opacity: 0.7;
        width: 40px;
        height: 40px;
        padding: 10px;
        background-color: rgba(0,0,0,0.5);
    }
`;


export { Image, Carousel, DownloadLink, CarouselItemContainer };
