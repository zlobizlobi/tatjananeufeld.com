import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ConcertTableRow } from './concertTableRow'
import { TableHeadRow, Table, TableHeadRowCell } from './styles'
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
        <Table>
            <thead>
                <TableHeadRow>
                    <TableHeadRowCell>
                        Date
                    </TableHeadRowCell>
                    <TableHeadRowCell>
                        Concert
                    </TableHeadRowCell>
                    <TableHeadRowCell>
                        Venue
                    </TableHeadRowCell>
                    <TableHeadRowCell>
                        Hall
                    </TableHeadRowCell>
                    <TableHeadRowCell>
                        Program
                    </TableHeadRowCell>
                </TableHeadRow>
            </thead>
            <tbody>
                {concertData.map(concert => <ConcertTableRow {...concert.primary} />)}
            </tbody>
        </Table>
    )
}