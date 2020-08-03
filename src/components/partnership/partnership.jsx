import React from 'react';
import { InformationRow } from './InformationRow'
import { media } from '@styles';
import { Partner } from './partner';
import styled from 'styled-components';
import Img from 'gatsby-image';

export const Partnership = ({ data: { announcement, body, image, name } }) => {

    console.log(body);
    const fluid = image.localFile.childImageSharp.fluid;

    return (
        <Container>
            <Column>
                <FlexContainer>
                    <Image fluid={fluid} />
                    <Column>
                        <Name>
                            {name}
                        </Name>
                        <Text>{announcement}</Text>
                    </Column>
                </FlexContainer>
                <InformationRow title="partnership_program" content={body} />
            </Column>
        </Container>
    );
};


export const Container = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 40px;
    width: 100%;
    padding: 20px;
    align-self: center;

    ${media.md(`
        padding: 80px;
        width: calc(100% - 160px);
    `)}

    &:last-child {
        margin: 0;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${media.md(`
        flex-direction: row;
    `)}
`;

export const Image = styled(Img).attrs({
    imgStyle: {
        objectFit: 'cover',
        objectPosition: 'center 15%'
    }
})`
    width: 100%;
    height: 150px;
    margin: 0 20px 20px 0;

    ${media.md(`
        max-width: 150px;
        min-height: 200px;
        height: 100%;
    `)}
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.p`
    font-size: 14px;
    line-height: 24.5px;
    color: #808080;
`;

export const Name = styled.h2`
    font-weight: lighter;
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
    text-transform: uppercase;

    ${media.md(`
        font-size: 22px;
    `)}
`;

export const SeeMoreButton = styled.button`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    align-self: center;

    &:last-child {
        color: white;
        text-transform: uppercase;
        margin-top: 10px;
    }
`;

export const PartnerContainer = styled.div`
    display: ${({ isShown }) => (isShown ? 'block' : 'none')};
    margin-top: 50px;
`;

