import React from 'react'
import { TableBodyRow, TableBodyRowCell } from './styles'
import { FormattedDate } from 'react-intl'

export const ConcertTableRow = ({ name, ticketsurl, date, hall, program, location }) => {

    return (
        <TableBodyRow>
            <TableBodyRowCell style={{ color: 'white' }}>{FormattedDate(date)}</TableBodyRowCell>
            <TableBodyRowCell>{name}</TableBodyRowCell>
            <TableBodyRowCell style={{ color: 'white' }}>{location}</TableBodyRowCell>
            <TableBodyRowCell>{hall}</TableBodyRowCell>
            <TableBodyRowCell style={{ color: 'white' }}>{program}</TableBodyRowCell>
        </TableBodyRow>
    )
}
