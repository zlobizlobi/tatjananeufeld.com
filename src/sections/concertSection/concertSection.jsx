import React from 'react'
import { Container, Heading } from './styles'
import { ConcertTable } from '../../components/concertTable'

export const ConcertSection = () => (
    <Container>
        <Heading>Concert dates</Heading>
        <ConcertTable />
    </Container>
)