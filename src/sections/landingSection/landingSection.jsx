import React from "react"
import { useTrail, animated } from 'react-spring'
import { useStaticQuery, graphql } from "gatsby"
import {
  Image,
  Name,
  SubHeading,
  NameContainer,
  Button,
  Section,
  Gradient
} from "./styles"
import { FormattedMessage } from "gatsby-plugin-intl"
import Scroll from "react-scroll"
import { FiCalendar } from "react-icons/fi"

export const LandingSection = () => {
  const landingPageImageSource = useStaticQuery(graphql`
    query landingPageQuery {
      prismicMainPage {
        data {
          landing_page_image {
            localFile {
              childImageSharp {
                fluid(quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)


  const {
    prismicMainPage: {
      data: {
        landing_page_image: {
          localFile: {
            childImageSharp: { fluid },
          },
        },
      },
    },
  } = landingPageImageSource

  const items = [
    <Name>
      <FormattedMessage id="landing_section_heading" />
    </Name>,
    <SubHeading>
      <FormattedMessage id="landing_section_subheading" />
    </SubHeading>,
    <Scroll.Link to="concerts" smooth duration={1100}>
      <Button aria-label="Go to the concert dates">
        <span>
          <FormattedMessage id="landing_section_button" />
        </span>
        <FiCalendar />
      </Button>
    </Scroll.Link>
  ]

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translate3d(0,90px,0)' },
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    config: { mass: 1, tension: 200, friction: 30 },
  })

  return (
    <Section name="home">
      <Image fluid={fluid} />
      <Gradient />
      <NameContainer>
        {trail.map((styles, i) => (
          <animated.div style={styles}>{items[i]}</animated.div>
        ))}
      </NameContainer>
    </Section>
  )
}
