import styled from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';

export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 30px;

    &:only-child {
        margin: 0;
    }
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
    max-width: 600px;
    color: white;

    ${media.sm(`
        margin: 0;
        padding: 0;
    `)}
`;

export const Image = styled(Img)`
    width: 200px;
    height: 200px;
    margin: 20px 0;

    ${media.md(`
        margin: 0 0 30px 30px;
    `)}
`;

export const Name = styled.h3`
    font-weight: bolder;
    color: white;
    margin-bottom: 20px;
    
    ${media.md(`
        margin: 0;
    `)}
`;
