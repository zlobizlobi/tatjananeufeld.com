import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { media } from '@styles'

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
`

const arrowStyles = css`
    && {
        color: white;
        position: absolute;
        top: 50%;
        width: 25px;
        height: 35px;
        z-index: 1;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.2);
        :hover {
            color: white;
        }

        ${media.sm(`
            width: 40px;
            height: 40px;
            padding: 5px;
        `)}
    }
`

const ArrowNext = styled(FiChevronRight)`
    && {
        ${arrowStyles}
        right: -20px;
    }
`

const ArrowPrevious = styled(FiChevronLeft)`
    && {
        ${arrowStyles}
        left: -20px;
    }
`

export { ArrowPrevious, ArrowNext, Image }
