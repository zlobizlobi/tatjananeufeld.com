import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Image, ImageContainer, Name, SubHeading, NameContainer, Button } from './styles'
import { FormattedMessage } from 'gatsby-plugin-intl'
import Scroll from 'react-scroll'
import { FiArrowRight } from 'react-icons/fi'

export const LandingSection = () => {

  const landingPageImageSource = useStaticQuery(graphql`
    query landinPageImageQuery {
      prismicMainPage {
        data {
          landing_page_image {
            localFile {
              childImageSharp {
                fluid(traceSVG: {optCurve: true, blackOnWhite: false, background: "rgba(255,255,255,0.7)", threshold: 80}){
                  src
                  srcSet
                  tracedSVG
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
        <Name><FormattedMessage id="landing_section_heading" /></Name>
        <SubHeading>Piano Stories of A Russian Maestro</SubHeading>
        <Scroll.Link to='contact-section' smooth duration={1100}>
          <Button aria-label="Go to the concert dates"><span>See dates &nbsp;</span><FiArrowRight /></Button>
        </Scroll.Link>
      </NameContainer>
    </ImageContainer >
  )
}