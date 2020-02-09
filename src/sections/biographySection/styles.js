import styled from 'styled-components';
import { Section as SectionComponent } from '@components';
import { media } from '@styles';
import Img from 'gatsby-image';

export const Section = styled(SectionComponent)`
    background-color: white;
    color: black;

    padding: 150px 30px;

    ${media.md(`
        padding: 150px 0;
    `)}
`;

export const Text = styled.p`
    font-size: 14px;
    line-height: 24.5px;
    max-width: 800px;

    ${media.sm(`
        padding: 0;
    `)}
`;

export const FirstImage = styled(Img)`
    width: 200px;
    height: 200px;
    margin: 30px 0;

    > picture > img {
        object-fit: cover !important;
        object-position: 0% 0% !important;
    }

    ${media.sm(`
        border-radius: 0%;
        margin: 7.5px 15px  7.5px 0;
        box-sizing: border-box;
        object-fit: cover;
        float: left;
    `)}
`;

export const SecondImage = styled(FirstImage)`
    margin: 30px 0;

    &:last-child {
        margin: 40px 0 0 0;
    }

    ${media.sm(`
       display: none;
    `)}
`;

export const NameHighlight = styled.span`
    font-weight: bold;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    ${media.sm(`
        display: inline-block;
        padding: 0;
    `)}
`;
