import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ConcertTableRow } from './concertTableRow'
import { TableHead, TableHeadCell } from './styles'

export const ConcertTable = () => {
    const prismicData = useStaticQuery(graphql`
        query MyQuery {
            prismicMainPage {
                data {
                    body {
                        primary {
                            name
                            date
                            location
                            hall
                            program
                            ticketsurl
                        }
                    }
                }
            }
        }
    `)

    const { prismicMainPage: {
        data: {
            body: concertData
        }
    } } = prismicData

    return (
        <>
            <TableHead>
                <TableHeadCell style={{ fontSize: '30px' }}>Date</TableHeadCell>
                <TableHeadCell style={{ color: 'rgba(255,255,255,0.7)' }}>Concert</TableHeadCell>
                <TableHeadCell style={{ fontSize: '30px' }}>Venue</TableHeadCell>
                <TableHeadCell style={{ color: 'rgba(255,255,255,0.7)' }}>Hall</TableHeadCell>
                <TableHeadCell style={{ fontSize: '30px' }}>Program</TableHeadCell>
            </TableHead>
            {concertData.map(concert => <ConcertTableRow {...concert.primary} />)}
        </>
    )
}