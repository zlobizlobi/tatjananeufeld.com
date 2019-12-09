import React from 'react'
import { TableBodyRow, TableBodyRowCell } from './styles'
import { FormattedDate } from 'react-intl'

export const ConcertTableRow = ({ name, ticketsurl, date, hall, program, location }) => {

    return (
        <TableBodyRow>
            <TableBodyRowCell>{FormattedDate(date)}</TableBodyRowCell>
            <TableBodyRowCell>{location}</TableBodyRowCell>
            <TableBodyRowCell>{name}</TableBodyRowCell>
            <TableBodyRowCell>{hall}</TableBodyRowCell>
            <TableBodyRowCell>{program}</TableBodyRowCell>
        </TableBodyRow>
    )
}
