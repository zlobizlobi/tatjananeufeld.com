import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Image, Carousel as CarouselComponent, DownloadLink } from './styles';
import { FiDownload } from 'react-icons/fi';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Carousel = () => {
    const galleryQuery = useStaticQuery(graphql`
        query Caroussel {
            prismicGallery {
                data {
                  gallery_collection {
                    image {
                      localFile {
                        childImageSharp {
                          fluid(toFormatBase64: WEBP, quality: 100) {
                            src
                            srcSet
                            srcWebp
                            originalName
                            srcSetWebp
                          }
                        }
                      }
                    }
                    video {
                      embed_url
                    }
                  }
                }
              } 
        }
    `);

    console.log(galleryQuery);
    const {
        prismicGallery: {
            data: { gallery_collection: carousselItems },
        },
    } = galleryQuery;

    return (
        <CarouselComponent showStatus={false} showThumbs={false}>
            {
                carousselItems.map((item, index) => {
                    console.log(item);
                    if (!(item.video.embed_url)) {
                        const fluid = item.image.localFile.childImageSharp.fluid;
                        const downloadSrc = item.image.localFile.childImageSharp.fluid.src
                        const name = item.image.localFile.childImageSharp.fluid.originalName
                        console.log(fluid);
                        return (
                            <div key={index} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                                <Image fluid={fluid} alt="Image of Tatjana" />
                                {downloadSrc && (
                                    <DownloadLink
                                        href={downloadSrc}
                                        download={name}
                                        target="_blank"
                                    >
                                        <FiDownload />
                                    </DownloadLink>
                                )}
                            </div>
                        );
                    }

                    const embeddedSrc = item.video.embed_url.replace('watch?v=', 'embed/') + '?controls=1&modestbranding=1'

                    return (
                        <div key={index} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                            <iframe
                                title="Youtube video player"
                                src={embeddedSrc}
                                allowFullScreen="0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </div>
                    );
                })
            }
        </CarouselComponent >
    );
};
