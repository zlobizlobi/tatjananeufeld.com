import styled, { css } from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';
import {
    IoIosArrowDropupCircle,
    IoIosArrowDropdownCircle,
    IoIosArrowDown,
    IoIosArrowUp,
} from 'react-icons/io';

export const Container = styled.div`
    display: flex;
    padding: 30px;
    border: 1px solid rgba(255,255,255,0.2);
    flex-direction: column;
    margin: 0 0 30px 0;

    &:last-child {
        margin: 0;
    }

    ${media.lg(`
        margin: 0 30px 0 0;
        &:last-child {
            margin: 0;
        }
    `)}
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${media.lg(`
        flex-direction: row;
    `)}
`;
export const Image = styled(Img)`
    min-width: 150px;
    height: 200px;
    margin-bottom: 30px;

    > picture > img {
        object-fit: contain !important;
        object-position: left !important;
    }

    ${media.lg(`
        margin-right: 20px;
        > picture > img {
            object-fit: cover !important;
            object-position: center center !important;
        }
    `)}
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.p`
    font-size: 14px;
    line-height: 24.5px;
    max-width: 800px;
    color: rgba(255,255,255,0.5);

    ${media.sm(`
        margin: 0;
        padding: 0;
    `)}
`;

export const PartnershipName = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    letter-spacing: 1px;
    font-size: 15px;
    color: white;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid white;

    ${media.md(`
        font-size: 22px;
        margin-bottom: 25px;
    `)}
`;

const arrowStyle = css`
    color: white;
    height: 35px;
    width: 35px;
    align-self: center;
    cursor: pointer;
`;

export const ArrowDown = styled(IoIosArrowDown)`
    ${arrowStyle}
`;

export const ArrowUp = styled(IoIosArrowUp)`
    ${arrowStyle}
`;

export const SeeMoreButton = styled.button`
    display: inline;
    height: 100%;
    flex-direction: column;    
    background: transparent;
    border: none;
`
export const PartnerContainer = styled.div`
    display: ${({ isShown }) => (isShown ? 'block' : 'none')};
    margin-top: 50px;
`;
