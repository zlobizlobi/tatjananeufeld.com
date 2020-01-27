import React from 'react'
import Slider from 'react-slick'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { media } from '../../styles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStaticQuery, graphql } from 'gatsby'

const arrowStyles = css`
    && {
        color: white;
        position: absolute;
        top: 50%;
        width: 45px;
        height: 45px;
        z-index: 1;
        padding: 10px;
        border: 1px solid white;
        :hover {
            color: white;
        }
    }
`

const ArrowNext = styled(FiChevronRight)`
    && {
        ${arrowStyles}
        right: 10px;

        ${media.md(`
            right: -60px;
        `)}
    }
`

const ArrowPrevious = styled(FiChevronLeft)`
    && {
        ${arrowStyles}
        left: 10px;

        ${media.md(`
            left: -60px;
        `)}
    }
`
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowPrevious/>,
    nextArrow: <ArrowNext/>
  };

 const Image = styled(Img)`
    width: 100% !important;
    max-height: 800px !important;
    object-fit: cover !important;
    object-position: 100% 100% !important;
  `

export const Caroussel = () => {
    const carousselQuery = useStaticQuery(graphql`
        query myCaroussel {
            prismicGallery {
                data {
                    image_collection {
                        image {
                            localFile {
                                childImageSharp{
                                    fluid(maxHeight: 800){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`
    )
    
    const {prismicGallery: {
        data: {
            image_collection
        }
    }} = carousselQuery;

    return (
    <Slider style={{width: '100%', height: '100%'}} {...settings}>
        {image_collection.map(({image: {localFile: {
            childImageSharp: {
                fluid
            }
        }}}) => 
         <Image fluid={fluid}/>
         )}
    </Slider>)
}