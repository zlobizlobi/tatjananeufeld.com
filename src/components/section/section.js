import styled from 'styled-components';
import { media } from '@styles';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 75px 20px;

    ${media.sm(`
        padding: 75px 0px;
    `)}
`;
