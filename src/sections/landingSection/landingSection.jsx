import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Image, ImageContainer, Name, SubHeading, NameContainer } from './styles'

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
      <NameContainer>
        <Name>Tatjana Neufeld</Name>
        <SubHeading>Piano Stories of A Russian Maestro</SubHeading>
      </NameContainer>
    </ImageContainer >
  )
}