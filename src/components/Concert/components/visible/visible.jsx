import React from 'react';
import { FormattedTime } from 'gatsby-plugin-intl';
import { media } from '@styles';
import styled from 'styled-components';
import Img from 'gatsby-image';

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

    let day = splittedDate[2];

    if (day.charAt(0) === '0') {
        day = day.slice(1);
    }

    const month = splittedDate[1];

    return (
        <Container>
            <Image fluid={posterSrc} alt="Concert poster" />
            <Column>
                <Name onClick={onClick}>{name}</Name>
                <Text>
                    {day}&nbsp;{month}&nbsp;
                    <FormattedTime value={date} />
                </Text>
                <Text>{city}</Text>
                {venue && <Text>{venue}</Text>}
                {address && <Text>{address}</Text>}
            </Column>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.h2`
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 5px;
    font-weight: normal;

    ${media.md(`
        font-size: 24px;
    `)}
`;

const Image = styled(Img)`
    margin-right: 20px;
    object-fit: contain;
    min-width: 100px;
    min-height: 150px;
    align-self: flex-start;
    border-radius: 1px;

    ${media.md(`    
        width: 150px;
        height: 200px;
    `)}
`;

const Text = styled.p`
    white-space: pre-wrap;
    font-size: 13px;
    color: #b7b7b7;
    margin-bottom: 5px;

    ${media.md(`
        font-size: 16px;
    `)}
`;
