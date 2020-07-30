import styled from 'styled-components';
import { media } from '@styles';

export const Heading = styled.h1`
    margin: 30px 0;
    font-size: 26px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 2.5px;  
    color: white;
    
    ${media.md(`
        font-size: 55px;
    `)}
`;
