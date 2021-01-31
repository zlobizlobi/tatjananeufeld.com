import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';
import thumbnail from '../../../images/thumbnail.svg';

export const ArchiveItems = ({ items }) => {
    const [activeItems, setActiveItems] = useState('Images');

    const videos = items.filter(item => item.slice_type === 'video');
    const images = items.filter(item => item.slice_type === 'image_plakat');
    const critiques = items.filter(item => item.slice_type === 'kritik');

    const mapObject = {
        Images: images,
        Videos: videos,
        Critiques: critiques,
    };

    return (
        <Container>
            <ItemButtons>
                {['Images', 'Videos', 'Critiques'].map(items => (
                    <ItemButton
                        active={items === activeItems}
                        onClick={() => setActiveItems(items)}
                    >
                        {items}
                    </ItemButton>
                ))}
            </ItemButtons>
            <ItemContainer>
                {mapObject[activeItems].map(item => {
                    if (item.slice_type === 'image_plakat') {
                        const fluid =
                            item.primary.plakat_image.localFile &&
                            item.primary.plakat_image.localFile.childImageSharp
                                .fluid;
                        const src =
                            fluid &&
                            item.primary.plakat_image.localFile.childImageSharp
                                .fluid.src;
                        return (
                            <Link
                                href={src || thumbnail}
                                target="_blank"
                                download
                                rel="noopener"
                            >
                                {fluid ? (
                                    <ImageFluid fluid={fluid} />
                                ) : (
                                    <Image src={thumbnail} />
                                )}
                            </Link>
                        );
                    }
                    if (item.slice_type === 'video') {
                        const video = item.primary.video;

                        const modifiedEmbedUrl =
                            video.embed_url.replace('watch?v=', 'embed/') +
                            '?controls=1&modestbranding=1';

                        return (
                            <Video
                                title="Youtube video player"
                                src={modifiedEmbedUrl}
                                allowFullScreen="1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            />
                        );
                    }
                    if (item.slice_type === 'kritik') {
                        const base = item.primary;
                        const file = base.critique_file.url;
                        const fluid =
                            base.critique_image.localFile.childImageSharp.fluid;
                        const name = base.critique_name;
                        return (
                            <Link
                                href={file}
                                target="_blank"
                                download
                                rel="noopener"
                                style={{ position: 'relative' }}
                            >
                                <ImageFluid fluid={fluid} />
                                <Overlay>{name}</Overlay>
                            </Link>
                        );
                    }
                    return null;
                })}
            </ItemContainer>
        </Container>
    );
};

const Video = styled.iframe`
    margin-right: 30px;
    width: 100%;
    height: 320px;

    &:last-child {
        margin: 0;
    }

    ${media.sm(`
        width: 320px;
        height: 320px;
    `)}
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    ${media.md(`
        margin-top: 20px;
    `)}
`;

const ItemButtons = styled.div`
    display: inline-block;
    flex-wrap: wrap;
    margin-bottom: 10px;
    line-height: 40px;
    margin-bottom: 30px;

    ${media.md(`
        line-height: unset;
        margin-bottom: 30px;
    `)}
`;

const ItemButton = styled.button`
    color: ${({ active }) => (!active ? 'rgba(255,255,255,0.7)' : 'white')};
    font-weight: ${({ active }) => (!active ? 'normal' : 'bold')};
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

const ItemContainer = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;

    ${media.md(`
        display: flex;
        flex-direction: row;
        margin: 20px;
        flex-wrap: wrap;
    `)}
`;

export const ImageFluid = styled(Img).attrs({
    imgStyle: {
        objectFit: 'cover',
        objectPosition: 'center',
    },
})`
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border: 1px solid white;
    object-fit: cover;
`;

const Overlay = styled.span`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    overflow: hidden;
    padding: 0 10px;
`;

const Link = styled.a`
    margin-bottom: 30px;
    width: 150px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    &:last-child {
        margin: 0;
    }

    ${media.sm(`
        margin-right: 30px;
    `)}
`;
