import React from 'react';
import {
    Flex,
    Poster,
    NameDateContainer,
    Name,
    DateContainer,
    TimeContainer,
    VenueContainer,
    VenueItem,
} from './styles';
import { FormattedTime } from 'gatsby-plugin-intl';

export const Visible = ({
    posterSrc,
    onClick,
    name,
    date,
    city,
    venue,
    hall,
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
                <VenueContainer>
                    <VenueItem>{venue},</VenueItem>
                    <VenueItem>{hall}</VenueItem>
                </VenueContainer>
            </NameDateContainer>
        </Flex>
    );
};
