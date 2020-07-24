import styled from 'styled-components';
import { Section as SectionComponent } from '@components';
import { media } from '@styles';
import Img from 'gatsby-image';

export const Section = styled(SectionComponent)`
    background-color: white;
    color: black;
`;

export const Text = styled.p`
    font-size: 14px;
    line-height: 24.5px;
    max-width: 800px;
`;

export const Image = styled(Img).attrs({
    imgStyle: {
        objectFit: 'contain',
    },
})`
    margin-bottom: 10px;
    border-radius: 1px;
    min-width: 200px;
    height: auto;

    ${media.sm(`
        margin: 7.5px 15px 0 0;
        float: left;
        min-width: 200px;
        height: auto;
    `)}
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.sm(`
        display: inline-block;
    `)}
`;
