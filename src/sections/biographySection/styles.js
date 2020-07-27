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
    max-width: 650px;
    white-space: break-spaces;
    margin-top: 20px;

    ${media.md(`
        margin: 0;
    `)}
`;

export const Image = styled(Img).attrs({
    imgStyle: {
        objectFit: 'cover',
        objectPosition: '0 20%'
    },
})`
    border-radius: 1px;
    width: 200px;
    height: 150px;

    ${media.sm(`
        margin: 7.5px 12.5px 4px 0;
        float: left;
        width: 200px;
        height: auto;
    `)}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.md(`
        display: inline-block;
        margin: 0;
    `)}
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
`

export const Button = styled.a`
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 1px;
    color: black;
    font-size: 14px;

    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    
    :hover {
        background-color: black;
        color: white;
    }
    
    ${media.sm(`    
        font-size: 16px;
        padding: 10px 20px;
    `)}
`
