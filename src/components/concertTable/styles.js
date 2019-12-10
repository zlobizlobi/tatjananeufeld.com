import styled from 'styled-components'
import { media } from '../../styles'

export const TableHead = styled.div`
    display: flex;
    justify-content: flex-start;
    font-family: 'Cormorant Garamond' , serif;
    font-weight: bold;
    flex-shrink: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
    margin-bottom: 20px;
`
export const TableHeadCell = styled.span`
    color: white;
    padding: 0 20px;
    font-family: 'Cormorant Garamond' , serif;
    width: 20%;
    display: flex;
    align-items: flex-end;
    text-transform: uppercase;
    
    &:last-child {
        padding: 0;
    }
`

export const TableBodyRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 0.5px solid rgba(255,255,255, 0.5);

    &:last-child {
       margin: 0;
       border: none;
    }
`

export const TableBodyRowCell = styled.span`
    display: flex;
    flex-wrap: wrap;
    color: white;
    padding: 0 20px;
    font-family: 'Montserrat' , serif;
    font-weight: lighter;
    color: rgba(255,255, 255,0.7);
    text-transform: none;
    line-height: 25px;
    width: 20%;
    font-size: 0.9em;
    &:last-child{
        padding: 0;
        text-align: left;
    }
`