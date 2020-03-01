import React, { useEffect } from 'react';
import { Concert } from '@components';
import { FormattedMessage } from 'react-intl';
import { Section, Heading } from './styles';

export const ConcertSection = ({ concerts }) => {
    return (
        <Section name="concerts">
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
};
