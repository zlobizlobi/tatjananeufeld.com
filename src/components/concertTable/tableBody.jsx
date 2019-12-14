import React from 'react'
import { TableRow, TableRowCell } from './styles'
import { FormattedDate } from 'react-intl'
import { useStaticQuery, graphql } from 'gatsby'

export const TableBody = () => {

    const prismicRowData = useStaticQuery(graphql`
        query RowData {
            prismicMainPage {
                data {
                    body {
                        primary {
                            city
                            concert_location
                            date
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
    } } = prismicRowData

    return (
        <>
            {concertData.map(({ primary: { date, city, concert_location, program, ticketsurl } }) =>
                <TableRow href={ticketsurl} target="_blank">
                    <TableRowCell>{FormattedDate(date)}</TableRowCell>
                    <TableRowCell>{city}</TableRowCell>
                    <TableRowCell>{concert_location}</TableRowCell>
                    <TableRowCell>{program}</TableRowCell>
                </TableRow>
            )}
        </>
    )
}
