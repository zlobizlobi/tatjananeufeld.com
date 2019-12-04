import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const LandingSection = () => {

    const landingPageImage = useStaticQuery(graphql`
    query LandingPageImageQuery {
        prismicMainPage {
            data {
              landing_page_image {
                localFile {
                  childImageSharp {
                    fluid {
                      srcSet
                      tracedSVG
                      src
                    }
                  }
                }
              }
            }
          }
      }
    `)

    console.log(landingPageImage);

    return (
        <div></div>
    )
}