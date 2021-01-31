import React, { forwardRef, Fragment } from 'react';
import { Concert, Section } from '@components';
import { FormattedMessage } from 'react-intl';
import { Heading } from './styles';
import styled from 'styled-components';
import { media } from '@styles';

export const ConcertSection = forwardRef((props, ref) => {
    const concerts = props.concerts;

    const currentDate = new Date();

    const comingConcerts = concerts.filter(concert => {
        const concertDate = new Date(concert.primary.date);

        if (concertDate.getTime() > currentDate.getTime()) {
            return concert;
        }

        return null;
    });

    return (
        <Section id="concerts" ref={ref}>
            <Heading>
                <FormattedMessage id="concert_heading" />
            </Heading>
            {concerts.map(({ primary: props }, index) => {
                const concertDateTime = new Date(props.date).getTime();

                const earliestComingConcertTime =
                    comingConcerts.length &&
                    new Date(
                        comingConcerts[comingConcerts.length - 1].primary.date
                    ).getTime();

                return (
                    <Fragment key={index}>
                        <Concert {...props} />
                        {!(concertDateTime === earliestComingConcertTime) && (
                            <ContainerDivider />
                        )}
                        {concertDateTime === earliestComingConcertTime && (
                            <DateDivider />
                        )}
                    </Fragment>
                );
            })}
        </Section>
    );
});

const ContainerDivider = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1px;
    width: 100%;

    ${media.md(`
        width: calc(100% - 160px);
    `)}

    &:last-child {
        display: none;
    }
`;

const DateDivider = styled.div`
    border-bottom: 2px solid rgba(255, 255, 255, 1);
    border-radius: 1px;
    width: 100%;

    ${media.md(`
        width: calc(100% - 160px);
    `)}
`;
