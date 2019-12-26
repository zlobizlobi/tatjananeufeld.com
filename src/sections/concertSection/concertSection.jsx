import React from "react"
import { Section, Heading } from "./styles"
import { Concert } from "components"
import { useStaticQuery, graphql } from "gatsby"

export const ConcertSection = () => {
  const prismicRowData = useStaticQuery(graphql`
    query Concertss {
      prismicMainPage {
        data {
          body {
            primary {
              name
              city
              venue
              hall
              date
              program
              vendors
              poster {
                url
              }
            }
          }
        }
      }
    }
  `)

  const {
    prismicMainPage: {
      data: { body: concerts },
    },
  } = prismicRowData

  return (
    <Section>
      <Heading>Concerts</Heading>
      {concerts.map(({ primary: props, name }) => (
        <Concert key={name} {...props} />
      ))}
    </Section>
  )
}
