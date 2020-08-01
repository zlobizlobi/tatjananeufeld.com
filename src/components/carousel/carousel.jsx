import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Image, Carousel as CarouselComponent, DownloadLink, CarouselItemContainer } from './styles';
import { FiDownload } from 'react-icons/fi';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Carousel = () => {
  const galleryQuery = useStaticQuery(graphql`
        query Caroussel {
            prismicGallery {
                data {
                  body {
                    ... on PrismicGalleryBodyImage {
                      id
                      primary {
                        image {
                          localFile {
                            childImageSharp {
                              fluid(quality: 100, toFormatBase64: WEBP, maxWidth: 700) {
                                aspectRatio 
                                src 
                                srcSet 
                                sizes 
                                originalName
                              }
                            }
                          }
                        }
                      }
                      slice_type
                    }
                    ... on PrismicGalleryBodyVideo {
                      primary {
                        video {
                          embed_url
                        }
                      }
                      id
                      slice_type
                    }
                  }
                }
            }
        }
    `);

  const {
    prismicGallery: {
      data: {
        body: slices
      },
    },
  } = galleryQuery;

  return (
    <CarouselComponent showStatus={false} showThumbs={false} infiniteLoop dynamicHeight>
      {
        slices.map(item => {
          const { primary, slice_type, id } = item;

          if (slice_type === 'image') {
            const fluid = item.primary.image.localFile.childImageSharp.fluid;

            const downloadSrc = fluid.src

            const name = fluid.originalName

            return (
              <CarouselItemContainer key={id}>
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
              </CarouselItemContainer>
            );
          }

          const video = primary.video;

          const modifiedEmbedUrl = video.embed_url.replace('watch?v=', 'embed/') + '?controls=1&modestbranding=1'

          return (
            <CarouselItemContainer key={id} style={{ height: '100%' }}>
              <iframe
                title="Youtube video player"
                src={modifiedEmbedUrl}
                allowFullScreen="1"
                frameBorder="0"
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              />
            </CarouselItemContainer>
          );
        })}
    </CarouselComponent >
  );
};
