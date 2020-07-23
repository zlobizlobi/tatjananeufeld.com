import React from 'react';
import {
    Flex,
    Poster,
    NameDateContainer,
    Name,
    DateContainer,
    TimeContainer,
    VenueItem,
} from './styles';
import { FormattedTime } from 'gatsby-plugin-intl';

export const Visible = ({
    posterSrc,
    onClick,
    name,
    date,
    city,
    address,
    venue,
}) => {
    const formattedDate = new Date(date);

    const splittedDate = formattedDate.toString().split(' ');

    const dateDay = splittedDate[2];

    const dateMonth = splittedDate[1];

    return (
        <Flex>
            <Poster fluid={posterSrc} alt="Concert poster" />
            <NameDateContainer>
                <Name onClick={onClick}>{name}</Name>
                <DateContainer>
                    <div style={{ marginRight: '5px' }}>
                        <span style={{ marginRight: '5px' }}>{dateDay}</span>
                        <span>{dateMonth}</span>
                    </div>
                    <TimeContainer>
                        <FormattedTime value={date} />,
                        <span style={{ marginLeft: '5px' }}>{city}</span>
                    </TimeContainer>
                </DateContainer>
                <div>
                    {venue && <VenueItem>{venue}</VenueItem>}
                    <VenueItem>{address}</VenueItem>
                </div>
            </NameDateContainer>
        </Flex>
    );
};
