import styled from 'styled-components'
import { media } from '../../styles'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: 100px;


    ${media.xl(`
        padding-right: 100px;
        align-items: flex-end;
    `)}
`

export const Heading = styled.h1`
    color: white;
    font-family: 'Cormorant Garamond', serif;
    display: inline-block;
    margin-bottom: 40px;
    font-size: 32px;
    text-transform: uppercase;
    padding-bottom: 5px;
    align-self: center;

    ${media.lg(`
        align-self: flex-end;
        font-size: 55px;
    `)}
`

export const TableContainer = styled.div`
    margin: 0 25px;
    
    ${media.lg(`
        padding: 30px 50px 50px 50px;
        border: 1px solid rgba(255,255,255,0.7);
        margin: 0;
    `)}
`