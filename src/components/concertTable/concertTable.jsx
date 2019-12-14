import React from 'react'
import { TableHead, TableHeadCell, Table, TableRow } from './styles'
import { TableBody } from './tableBody'

export const ConcertTable = () =>
    <Table>
        <TableHead>
            <TableRow>
                <TableHeadCell>Date</TableHeadCell>
                <TableHeadCell>Place</TableHeadCell>
                <TableHeadCell>Venue</TableHeadCell>
                <TableHeadCell>Program</TableHeadCell>
            </TableRow>
        </TableHead>
        <TableBody />
    </Table >

