import styled from 'styled-components';
import { Heading as HeadingComponent } from '@components';
import { media } from '@styles';

export const Heading = styled(HeadingComponent)`
    && {
        color: white;
        margin: 0;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;

    ${media.lg(`
        flex-direction: row;
    `)}
`;
