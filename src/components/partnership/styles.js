import styled from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled(Img)`
    width: 200px;
    height: 200px;
    margin: 30px 0;
`;
