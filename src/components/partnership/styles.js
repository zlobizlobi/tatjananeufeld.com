import styled, { css } from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

export const Container = styled.div`
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
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
        margin-right: 30px;

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
    color: #808080;
`;

export const PartnershipName = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    font-size: 15px;
    color: white;
    margin-bottom: 15px;
    text-transform: uppercase;

    ${media.md(`
        font-size: 22px;
    `)}
`;

const arrowStyle = css`
    color: #808080;
    height: 25px;
    width: 25px;
    margin-bottom: 10px;
`;

export const ArrowDown = styled(FiPlusCircle)`
    ${arrowStyle}
`;

export const ArrowUp = styled(FiMinusCircle)`
    ${arrowStyle}
`;

export const SeeMoreButton = styled.button`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: none;

    &:last-child {
        color: white;
        text-transform: uppercase;
        margin-top: 10px;
    }
`;

export const PartnerContainer = styled.div`
    display: ${({ isShown }) => (isShown ? 'block' : 'none')};
    margin-top: 50px;
`;
