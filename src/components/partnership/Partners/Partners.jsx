import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';
import { FiDownload } from 'react-icons/fi';
import thumbnail from '../../../images/thumbnail.svg';

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

    console.log(activeInstrument);

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
                            <ImageFluid fluid={activeImage} loading="lazy" />
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
                <DownloadIcon />
                {`Download ${
                    activeInstrument === name ? name : 'artist'
                    } Biography`}
            </DownloadLink>
        </Container>
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
    background-color: ${({ active }) =>
        active ? 'white' : 'rgba(255,255,255, 0.7)'};
    margin-right: 10px;
    font-size: 11px;
    border-radius: 1px;
    color: black;
    line-height: 25px;
    display: inline;
    transition: background-color 0.3s ease;
    padding: 1px 10px;

    :last-child {
        margin: 0;
    }

    :hover {
        background-color: white;
    }

    ${media.md(`
        font-size: 14px;
    `)}
`;

export const ImageFluid = styled(Img).attrs({
    imgStyle: {
        objectFit: 'cover',
        objectPosition: 'center',
    },
})`
    height: 150px;
    width: 100%;
    margin: 0 0 20px 0;

    ${media.md(`
        width: 150px;
        min-width: 150px;
        height: 200px;
        margin: 10px 20px 0 0;
    `)}
`;

const Image = styled.img`
    height: 150px;
    width: 100%;

    ${media.md(`
        width: 150px;
        height: 200px;
        object-fit: cover;
    `)}
`;

const ArtistContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${media.sm(`
        margin: 20px;
        flex-direction: row;
    `)}
`;

const Text = styled.p`
    color: #b7b7b7;
    line-height: 30px;
`;

export const DownloadLink = styled.a`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: white;
    margin-top: 30px;

    ${media.md(`
        font-size: 13px;
    `)}
`;

export const DownloadIcon = styled(FiDownload)`
    margin-right: 5px;
    width: 20px;
    height: 20px;

    ${media.md(`
        width: 25px;
        height: 25px;
    `)}
`;
