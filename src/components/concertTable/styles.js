import styled from 'styled-components'
import { media } from '../../styles'

export const TableHeadRow = styled.tr`
    height: 50px;
    text-transform: uppercase;
`
export const TableHeadRowCell = styled.th`
    vertical-align: middle;
    border-bottom: 1px solid white;
    text-align: center;
    color: white;
    padding: 10px;
    width: 10%;
    font-family: 'Cormorant Garamond' , serif;
    font-weight: bold;
`

export const Table = styled.table`
    text-align: center;
    margin: 0;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    font-size: 13px;
    width: 75%;

    ${media.md(`
        font-size: inherit;
    `)}
`

export const TableBodyRow = styled.tr`
`

export const TableBodyRowCell = styled.td`
    vertical-align: middle;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    text-align: center;
    color: white;
    padding: 20px 0;
    font-family: 'Cormorant Garamond' , serif;
    font-weight: normal;
    color: rgba(255,255,255,0.7);
    text-transform: none;
`