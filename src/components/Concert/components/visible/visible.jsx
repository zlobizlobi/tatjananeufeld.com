import React from 'react';
import { FormattedTime } from 'gatsby-plugin-intl';
import { media } from '@styles';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useModal } from '@hooks'

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

    const year = splittedDate[3];

    const month = splittedDate[1];

    const { showModal } = useModal();

    return (
        <Container>
            <Image fluid={posterSrc} alt="Concert poster" onClick={() => showModal(<ModalImage fluid={posterSrc} alt="Concert poster" />)} />
            <Column>
                <Name onClick={onClick}>{name}</Name>
                <Text>
                    {day}&nbsp;{month}&nbsp;
                    <FormattedTime value={date} />,&nbsp;
                    {year}
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

const Image = styled(Img).attrs({
    imgStyle: {
        objectFit: 'cover',
    }
})`
    margin-right: 20px;
    min-width: 100px;
    border-radius: 1px;
    cursor: pointer;
    
    ${media.md(`    
        min-width: 150px;
        min-height: 200px;
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

const ModalImage = styled(Img).attrs({
    imgStyle: {
        minHeight: '100%',
        objectFit: 'contain'
    }
})`
    border-radius: 1px;
    height: 100%;
    width: 100%;
`
