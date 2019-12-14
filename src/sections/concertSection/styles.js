import styled from 'styled-components'
import { media } from '../../styles'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: 200px;

    ${media.md(`
        align-items: flex-end;
    `)}

    ${media.xl(`
        padding-right: 200px;
        align-items: flex-end;
    `)}
`

export const Heading = styled.h1`
    color: white;
    font-family: 'Cormorant Garamond', serif;
    display: inline-block;
    margin-bottom: 100px;
    font-size: 32px;
    text-transform: uppercase;
    padding-bottom: 5px;
    align-self: center;
    border-bottom: 0.5px solid rgba(255,255,255,0.4);

    ${media.md(`
        align-self: flex-end;
        font-size: 55px;
        margin-right: 100px;
    `)}

    ${media.lg(`
        align-self: flex-end;
        font-size: 55px;
        margin-right: 70px;
    `)}
`

export const TableContainer = styled.div`
    margin: 0 25px;

    ${media.md(`
        margin: 0;
    `)}
`