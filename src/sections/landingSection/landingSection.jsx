import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Img } from 'gatsby-image'
import { Image, ImageContainer } from './styles'

export const LandingSection = () => {

  const landingPageImageSource = useStaticQuery(graphql`
    query landingPageBackgroundImageQuery {
      prismicMainPage {
        data {
          landing_page_image {
            localFile {
              childImageSharp {
              fluid(maxHeight: 2000) {
                    ...GatsbyImageSharpFluid
                  }
              }
            }
          }
        }
      }
    }
  `)

  const { prismicMainPage: {
    data: {
      landing_page_image: {
        localFile: {
          childImageSharp: {
            fluid
          }
        }
      }
    }
  } } = landingPageImageSource

  return (
    <ImageContainer>
      <Image fluid={fluid} />
    </ImageContainer>
  )
}