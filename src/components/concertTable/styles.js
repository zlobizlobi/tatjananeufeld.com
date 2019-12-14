import styled from 'styled-components'
import { media } from '../../styles'

export const TableHead = styled.thead`
    font-family: 'Cormorant Garamond' , serif;
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(255,255,255,0.7);
`

export const TableHeadCell = styled.th`
    color: white;
    padding: 8px;
    font-family: 'Montserrat' , sans-serif;
    font-size: 8px;
    font-weight: bold;

    ${media.lg(`
        padding: 15px;
        font-size: 14px;
    `)}
`

export const TableRow = styled.tr`
    border-bottom: 0.5px solid rgba(255,255,255, 0.1);
    height: 60px;

    &:last-child {
       border: none;
    }
`

export const TableRowCell = styled.td`
    display: table-cell;
    color: white;
    padding: 8px;
    font-family: 'Montserrat' , serif;
    font-weight: lighter;
    color: rgba(255,255,255,0.6);
    text-transform: none;
    line-height: 17px;
    font-size: 8px;
    letter-spacing: 1px;
    vertical-align: middle;

    ${media.lg(`
        font-size: 13px;
        padding: 25px 60px;
    `)}
`

export const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    table-layout: fixed;
`