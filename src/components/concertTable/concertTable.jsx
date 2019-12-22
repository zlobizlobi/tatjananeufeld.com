import React, { useState } from 'react'
import { TableHead, TableHeadCell, Table, TableRow, ArchiveButton } from './styles'
import { TableBody } from './tableBody'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

export const Concert = styled.div`

`
export const ConcertTable = () => {

    const [isArchiveOpen, setArchiveOpen] = useState(false);

    // const prismicRowData = useStaticQuery(graphql`
    //     query Concerts {
    //         prismicMainPage {
    //             data {
    //                 body {
    //                     primary {
    //                         city
    //                         concert_location
    //                         date
    //                         program
    //                         ticketsurl
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)

    // const { prismicMainPage: {
    //     data: {
    //         body: concerts
    //     }
    // } } = prismicRowData

    return (
        <React.Fragment>
            {/* <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Date</TableHeadCell>
                        <TableHeadCell>Place</TableHeadCell>
                        <TableHeadCell>Venue</TableHeadCell>
                        <TableHeadCell>Program</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody isArchiveOpen={isArchiveOpen} concerts={concerts} />
            </Table >
            {concerts.length > 5 && (
                <ArchiveButton onClick={() => setArchiveOpen(!isArchiveOpen)}>
                    {isArchiveOpen ? 'Close' : 'See archive'}
                </ArchiveButton>
            )} */}
        </React.Fragment>
    )
}