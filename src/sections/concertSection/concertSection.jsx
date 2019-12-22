import React from 'react'
import { Section, Heading, TableContainer } from './styles'
import { Concert } from 'components'
import { useStaticQuery, graphql } from 'gatsby'

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
                            poster  {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)

    const { prismicMainPage: {
        data: {
            body: concerts
        }
    } } = prismicRowData

    return (
        <Section>
            <Heading>Concerts</Heading>
            {/* <TableContainer>
            <ConcertTable />
        </TableContainer> */}
            {concerts.map(({ primary: props }) =>
                <Concert {...props} />
            )}
        </Section>)
}