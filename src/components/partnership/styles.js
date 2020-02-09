import styled, { css } from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';
import {
    IoIosArrowDropupCircle,
    IoIosArrowDropdownCircle,
} from 'react-icons/io';

export const Container = styled.div`
    display: flex;
    padding: 35px;
    border: 1px solid white;
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
    width: 200px;
    height: 200px;
    margin-bottom: 20px;

    ${media.lg(`
        margin-right: 40px;
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
    color: white;

    ${media.sm(`
        margin: 0;
        padding: 0;
    `)}
`;

export const PartnershipName = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-decoration: underline;
    letter-spacing: 1px;
    font-size: 15px;
    color: white;
    margin-bottom: 10px;

    ${media.md(`
        font-size: 22px;
        margin-bottom: 10px;
    `)}
`;

const arrowStyle = css`
    color: white;
    height: 35px;
    width: 35px;
    align-self: center;
    cursor: pointer;
    margin-top: 50px;
`;

export const ArrowDown = styled(IoIosArrowDropdownCircle)`
    ${arrowStyle}
`;

export const ArrowUp = styled(IoIosArrowDropupCircle)`
    ${arrowStyle}
`;

export const PartnerContainer = styled.div`
    display: ${({ isShown }) => (isShown ? 'block' : 'none')};
    margin-top: 50px;
`;
