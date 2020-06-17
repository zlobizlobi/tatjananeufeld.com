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

export const FirstImage = styled(Img).attrs({
    imgStyle: {
        objectFit: 'cover',
        objectPosition: '0%, 0%',
    },
})`
    width: 200px;
    height: 200px;
    margin: 20px 0;

    ${media.sm(`
        margin: 7.5px 15px 7.5px 0 ;
        float: left;
    `)}
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    ${media.sm(`
        display: inline-block;
    `)}
`;
