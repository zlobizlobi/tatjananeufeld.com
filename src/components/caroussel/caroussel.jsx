import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useStaticQuery, graphql } from 'gatsby';
import { ArrowPrevious, ArrowNext, Image, Slider } from './styles';

const CAROUSSEL_SETTINGS = {
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowPrevious />,
    nextArrow: <ArrowNext />,
};

export const Caroussel = () => {
    const galleryQuery = useStaticQuery(graphql`
        query myCaroussel {
            prismicGallery {
                data {
                    image_collection {
                        image {
                            localFile {
                                childImageSharp {
                                    fluid(quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const {
        prismicGallery: {
            data: { image_collection: galleryImages },
        },
    } = galleryQuery;

    console.log(galleryQuery);
    debugger;

    return (
        <Slider {...CAROUSSEL_SETTINGS}>
            {galleryImages.map(galleryImage => {
                const {
                    image: {
                        localFile: {
                            childImageSharp: { fluid },
                        },
                    },
                } = galleryImage;

                return <Image fluid={fluid} />;
            })}
        </Slider>
    );
};
