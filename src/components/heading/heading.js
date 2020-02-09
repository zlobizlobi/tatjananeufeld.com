import styled from 'styled-components';
import { media } from '@styles';

export const Heading = styled.h1`
    font-family: 'Montserrat', serif;
    margin-bottom: 50px;
    font-size: 26px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 2.5px;

    ${media.md(`
        font-size: 55px;
        margin-right: 385px;
    `)}
`;
