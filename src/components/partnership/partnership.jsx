import React from 'react';
import { InformationRow } from './InformationRow';
import { media } from '@styles';
import { Programs } from './Programs';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Partners } from './Partners';
import thumbnail from '../../images/thumbnail.svg';

export const Partnership = ({
    data: {
        announcement,
        biography,
        body: slices,
        biography_file,
        image,
        name,
    },
}) => {
    const fluid = image.localFile && image.localFile.childImageSharp.fluid;

    const programs = slices.filter(slice => slice.slice_type === 'program');

    const partners = slices.filter(slice => slice.slice_type === 'artist');

    return (
        <Container>
            <Column>
                <FlexContainer>
                    <Image fluid={fluid || thumbnail} />
                    <Column>
                        <Name>{name}</Name>
                        <Text>{announcement}</Text>
                    </Column>
                </FlexContainer>
                <InformationRow title="partnership_program">
                    <Programs programs={programs} />
                </InformationRow>
                <InformationRow title="partnership_artists">
                    <Partners partners={partners} biography={biography} biographyFile={biography_file} name={name} />
                </InformationRow>
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
        objectPosition: 'center 15%',
    },
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
    color: #b7b7b7;
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

export const PartnerContainer = styled.div`
    display: ${({ isShown }) => (isShown ? 'block' : 'none')};
    margin-top: 50px;
`;
