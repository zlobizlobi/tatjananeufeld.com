import React from 'react'
import { Container, Name, NameDateContainer, DateContainer, Divider, VenueContainer, VenueItem, Poster, Button } from './styles'
import { FormattedDate } from 'react-intl'
import { FiArrowDownCircle } from 'react-icons/fi'

export const Concert = ({ name, city, venue, hall, date, program, vendors, poster: { url } }) => {

    const pureDate = date.substring(0, date.indexOf('T'))

    console.log(url)
    return (
        <Container>
            <div style={{ display: 'inline-flex' }}> <Poster posterUrl={url} />
                <NameDateContainer>
                    <Name>{name}</Name>
                    <DateContainer>
                        <FormattedDate value={pureDate}
                            year="numeric"
                            month="long"
                            day="2-digit"
                        />
                        <Divider />
                        {city}
                    </DateContainer>
                    <VenueContainer>
                        <VenueItem>{venue},</VenueItem>
                        <VenueItem>{hall}</VenueItem>
                    </VenueContainer>
                </NameDateContainer></div>
            <Button>Read more <FiArrowDownCircle /></Button>
        </Container>
    )
}