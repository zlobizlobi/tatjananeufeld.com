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
        width: 30px;
        height: 30px;
        z-index: 1;
        cursor: pointer;

        :hover {
            color: white;
        }

        ${media.sm(`
            padding: 10px;
            border: 1px solid white;
            width: 40px;
            height: 40px;
        `)}
    }
`

const ArrowNext = styled(FiChevronRight)`
    && {
        ${arrowStyles}
        right: 10px;

        ${media.md(`
            right: -60px;
        `)}
    }
`

const ArrowPrevious = styled(FiChevronLeft)`
    && {
        ${arrowStyles}
        left: 10px;

        ${media.md(`
            left: -60px;
        `)}
    }
`

export { ArrowPrevious, ArrowNext, Image }
