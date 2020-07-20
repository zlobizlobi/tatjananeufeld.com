import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Image, Carousel as CarouselComponent } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Carousel = () => {
    const galleryQuery = useStaticQuery(graphql`
        query Caroussel {
            prismicGallery {
                data {
                    gallery_collection {
                        collection_item {
                            url
                            link_type
                            name
                        }
                    }
                }
            }
        }
    `);

    const {
        prismicGallery: {
            data: { gallery_collection: carousselItems },
        },
    } = galleryQuery;

    return (
        <CarouselComponent showStatus={false} showThumbs={false}>
            {
                carousselItems.map(item => {
                    const src = item.collection_item.url;
                    const srcType = item.collection_item.link_type;
                    const itemName = item.collection_item.name;

                    if (srcType === 'Media') {
                        return (
                            <div key={itemName} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                                <Image key={itemName} src={src} />
                            </div>
                        );
                    }

                    const embeddedSrc = src.replace('watch?v=', 'embed/') + '?controls=0&modestbranding=1'

                    return (
                        <iframe
                            title="Youtube video player"
                            key={itemName}
                            src={embeddedSrc}
                            allowFullScreen="0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        />

                    );
                })
            }
        </CarouselComponent >
    );
};
