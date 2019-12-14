import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Image, Name, SubHeading, NameContainer, Button, Section } from './styles'
import { FormattedMessage } from 'gatsby-plugin-intl'
import Scroll from 'react-scroll'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'

export const LandingSection = () => {

  const landingPageImageSource = useStaticQuery(graphql`
    query landingPageQuery {
      prismicMainPage {
        data {
          landing_page_image {
              localFile {
                  childImageSharp {
                    sizes(
                      traceSVG: { color: "rgba(0,0,0)", threshold: 80 }
                      quality: 100
                    ) {
                      tracedSVG
                      srcSet
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
            sizes
          }
        }
      }
    }
  } } = landingPageImageSource

  return (
    <Section>
      <Image fluid={sizes} />
      <NameContainer>
        <Name>
          <FormattedMessage id="landing_section_heading" />
        </Name>
        <SubHeading>
          <FormattedMessage id="landing_section_subheading" />
        </SubHeading>
        <Scroll.Link to='contact-section' smooth duration={1100}>
          <Button aria-label="Go to the concert dates">
            <span>
              <FormattedMessage id="landing_section_button" />
            </span>
            <FiCalendar />
          </Button>
        </Scroll.Link>
      </NameContainer>
    </Section >
  )
}