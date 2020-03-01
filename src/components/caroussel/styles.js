import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { media } from '@styles';
import SliderComponent from 'react-slick';

const Slider = styled(SliderComponent)`
    width: 100%;
    height: 100%;
`;

const Image = styled(Img)`
    height: 300px;

    > picture > img {
        object-fit: contain !important;
    }

    ${media.sm(`
        height: 800px !important;

        > picture > img {
            object-fit: contain !important;
        }    
    `)}

    ${media.xl(`
        > picture > img {
            object-fit: contain !important;
            height: 1000px;
        }
    `)}
`;

const arrowStyles = css`
    color: white;
    position: absolute;
    top: 50%;
    padding: 5px;
    box-sizing: content-box;
    width: 25px;
    height: 25px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.2);
`;

const ArrowNext = styled(FiChevronRight)`
    &&& {
        ${arrowStyles}
        right: -20px;
    }
`;

const ArrowPrevious = styled(FiChevronLeft)`
    &&& {
        ${arrowStyles}
        left: -20px;
    }
`;

export { ArrowPrevious, ArrowNext, Image, Slider };
