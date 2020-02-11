import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useStaticQuery, graphql } from 'gatsby'
import { ArrowPrevious, ArrowNext, Image } from './styles'

const carousselSettings = {
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowPrevious />,
    nextArrow: <ArrowNext />,
}

export const Caroussel = () => {
    const carousselQuery = useStaticQuery(graphql`
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
    `)

    const {
        prismicGallery: {
            data: { image_collection },
        },
    } = carousselQuery

    return (
        <Slider style={{ width: '100%', height: '100%' }} {...carousselSettings}>
            {image_collection.map(
                ({
                    image: {
                        localFile: {
                            childImageSharp: { fluid },
                        },
                    },
                }) => (
                        <Image fluid={fluid} />
                    )
            )}
        </Slider>
    )
}
