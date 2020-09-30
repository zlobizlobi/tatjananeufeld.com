import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';
import thumbnail from '../../../images/thumbnail.svg';
import { DownloadLink } from '@components';

export const Partners = ({ partners, biography, biographyFile, name }) => {
    const [activeArtist, setActiveArtist] = useState(name);

    const activeInstrument =
        partners.filter(
            ({ primary }) => primary.instrument === activeArtist
        )[0] || name;

    const activeImage =
        activeInstrument.primary &&
        activeInstrument.primary.artist_image.localFile.childImageSharp.fluid;

    const artists = partners.map(({ primary }) => primary.instrument);

    return (
        <Container>
            <ArtistButtons>
                <ArtistButton
                    active={name === activeArtist}
                    onClick={() => setActiveArtist(name)}
                >
                    {name}
                </ArtistButton>
                {artists.map(artist => (
                    <ArtistButton
                        active={artist === activeArtist}
                        onClick={() => setActiveArtist(artist)}
                    >
                        {artist}
                    </ArtistButton>
                ))}
            </ArtistButtons>
            <ArtistContainer>
                {activeInstrument === name && <Text>{biography}</Text>}
                {!(activeInstrument === name) && (
                    <>
                        {activeImage ? (
                            <ImageFluid fluid={activeImage}
                            />
                        ) : (
                                <Image src={thumbnail} />
                            )}
                        <Text>{activeInstrument.primary.artist_biography}</Text>
                    </>
                )}
            </ArtistContainer>
            <DownloadLink
                href={
                    !(activeInstrument === name)
                        ? activeInstrument.primary.artist_biography_file.url
                        : biographyFile.url
                }
                target="_blank"
                download
                rel="noopener"
            >
                {`Download ${activeInstrument === name ? name : 'artist'
                    } Biography`}
            </DownloadLink>
        </Container >
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    ${media.md(`
        margin-top: 20px;
    `)}
`;

const ArtistButtons = styled.div`
    display: inline-block;
    flex-wrap: wrap;
    margin-bottom: 10px;
    line-height: 40px;
    margin-bottom: 30px;

    ${media.md(`
        line-height: unset;
`)}
`;

const ArtistButton = styled.button`
    color: ${({ active }) => !active ? 'rgba(255,255,255,0.7)' : 'white'};
    font-weight: ${({ active }) => !active ? 'normal' : 'bold'};
    margin-right: 10px;
    font-size: 11px;
    border-radius: 1px;
    line-height: 25px;
    display: inline;
    transition: all 0.3s ease;
    padding: 1px 10px;

    :last-child {
        margin: 0;
    }

    :hover {
        color: white;
    }

    ${media.md(`
        font-size: 14px;
    `)}
`;

export const ImageFluid = styled(Img).attrs({
})`
    margin: 7.5px 12.5px 4px 0;
    float: left;
    width: 100px;
    height: auto;

    ${media.md(`
        width: unset;
        height: unset;
        margin: 0 20px 0 0;
        flex: 20% 0 0;
        align-self: flex-start;
    `)}
`;

const Image = styled.img`
    height: 150px;
    width: 300px;

    ${media.md(`
        width: 150px;
        height: 300px;
        object-fit: contain;
    `)}
`;

const Text = styled.p`
    color: #b7b7b7;
    line-height: 32px;
    white-space: break-spaces;
    font-size: 14px;

    ${media.md(`
        font-size: 16px;
        &:before {
            content: '';
            display: block;
            margin: -0.1em 0;
        }
    `)}
`;

const ArtistContainer = styled.div`
    display: inline;

    ${media.md(`
        display: flex;
        margin: 20px;
        flex-direction: row;
    `)}
`;
