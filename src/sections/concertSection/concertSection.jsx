import React from 'react';
import { Concert, Section } from '@components';
import { FormattedMessage } from 'react-intl';
import { Heading } from './styles';

export const ConcertSection = ({ concerts }) => (
    <Section id="concerts">
        <Heading>
            <FormattedMessage id="concert_heading" />
        </Heading>
        <div>
            {concerts.map(({ primary: props, name }) => (
                <Concert key={name} {...props} />
            ))}
        </div>
    </Section>
);
