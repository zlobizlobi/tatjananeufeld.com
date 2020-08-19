import styled from 'styled-components';
import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import Img from 'gatsby-image';
import { media } from '@styles';

const Carousel = styled(CarouselComponent)`
    width: 100%;
    height: auto;

    .carousel .slide iframe {
        display: inline-block;
        margin: 0;
        width: calc(100% - 80px);
    }
`;

const CarouselItemContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-height: 700px;
`;

const Image = styled(Img).attrs({
    imgStyle: {
        objectFit: 'contain',
    },
})`
    max-height: 100%;
    width: 100%;
`;

const DownloadLink = styled.a`
    display: flex;
    justify-content: flex-end;
    padding: 0 30px 10px 0;
    position: absolute;
    bottom: 0;
    z-index: 1000 !important;
    width: 100%;
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
        width: 20px;
        height: 20px;
    }

    ${media.sm(`
        > svg {
            width: 25px;
            height: 25px;  
        }
    `)}
`;

export { Image, Carousel, DownloadLink, CarouselItemContainer };
