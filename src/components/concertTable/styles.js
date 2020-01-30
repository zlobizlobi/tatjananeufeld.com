import styled from 'styled-components'
import { media } from '@styles'

export const TableHead = styled.thead`
    font-family: 'Cormorant Garamond', serif;
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`

export const TableHeadCell = styled.th`
    color: white;
    padding: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 8px;
    font-weight: bold;

    ${media.md(`
        padding: 15px;
        font-size: 14px;
    `)}
`

export const TableRow = styled.a`
    display: table-row;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
    height: 60px;
    transition: background-color 0.2s ease;
    cursor: pointer;
    text-decoration: none;

    :hover {
        background-color: white;

        > td {
            color: black;
        }

        &:first-child {
            background-color: transparent;
            cursor: default;
        }
    }

    &:last-child {
        border: none;
    }
`

export const TableRowCell = styled.td`
    padding: 8px;
    font-family: 'Montserrat' , serif;
    font-weight: lighter;
    color: rgba(255,255,255,0.8);
    text-transform: none;
    line-height: 20px;
    font-size: 8px;
    letter-spacing: 1px;
    vertical-align: middle;
    max-width: 100px;

    &:last-child {
        border: none;
     }
    
    ${media.md(`
        max-width: 250px;
        font-size: 13px;
        padding: 25px 7.5px;
    `)}

    ${media.lg(`
        max-width: 250px;
        font-size: 13px;
        padding: 25px 40px;
    `)}

    ${media.xl(`
        max-width: 250px;
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

export const ArchiveButton = styled.button`
    padding: 10px 15px;
    font-family: 'Montserrat', sans-serif;
    margin-top: 40px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 1px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    transition: all 0.2s ease;

    :hover {
        background-color: white;
        color: black;
    }

    :focus {
        outline: none;
    }
`
