import styled from 'styled-components';
import { Heading as HeadingComponent } from '@components';
import { media } from '@styles';

export const Heading = styled(HeadingComponent)`
    && {
        color: white;
        margin: 0;
        ${media.md(`
            margin-right: 250px;
        `)};
    }
`;

export const Container = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
