import React from 'react'
import { Container, Heading, TableContainer } from './styles'
import { ConcertTable } from '../../components/concertTable'

export const ConcertSection = () => (
    <Container>
        <Heading>Concerts</Heading>
        <TableContainer>
            <ConcertTable />
        </TableContainer>
    </Container>
)