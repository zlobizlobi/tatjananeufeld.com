import styled from 'styled-components';
import { media } from '@styles';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px 20px;

    ${media.sm(`
        padding: 150px 0px;
    `)}
`;
