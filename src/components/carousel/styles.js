import styled from 'styled-components';
import { Carousel as CarouselComponent } from 'react-responsive-carousel';

const Carousel = styled(CarouselComponent)`
    width: 100%;


    iframe {
        margin: 0 !important;
        width: 100% !important;
        height: 100%;
    }
`;

const Image = styled.img`
    object-fit: contain;
    max-height: 600px;
    width: 100%;
`;


export { Image, Carousel };
