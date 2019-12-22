import React from 'react'
import { TableRow, TableRowCell } from './styles'
import { FormattedDate } from 'react-intl'

export const TableBody = ({ isArchiveOpen, concerts }) => {

    const getItems = (concerts) => {
        if (concerts.length <= 5) {
            return concerts;
        }

        if (!isArchiveOpen) {
            return concerts.slice(0, 5);
        }

        return concerts;
    };

    return (
        <>
            {getItems(concerts).map(({ primary: { date, city, concert_location, program, ticketsurl } }) =>
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
