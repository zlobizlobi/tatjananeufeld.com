import styled from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';

export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 30px;

    ${media.md(`
        flex-direction: row;
    `)}

    &:last-child {
        margin: 0;
    }
`;

export const Text = styled.p`
    font-size: 14px;
    line-height: 24.5px;
    color: #808080;
    max-width: 800px;
`;

export const Image = styled(Img)`
    width: 150px;
    height: 150px;
    margin: 20px 0;

    ${media.md(`
        margin: 0 0 15px 30px;
    `)}
`;

export const Name = styled.h3`
    font-weight: lighter;
    color: white;
    margin-bottom: 20px;

    ${media.md(`
        margin: 0;
    `)}
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
