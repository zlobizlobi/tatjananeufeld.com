import React, { forwardRef } from 'react';
import { Concert, Section } from '@components';
import { FormattedMessage } from 'react-intl';
import { Heading } from './styles';

export const ConcertSection = forwardRef((props, ref) => (
    <Section id="concerts" ref={ref}>
        <Heading>
            <FormattedMessage id="concert_heading" />
        </Heading>
        <div>
            {props.concerts.map(({ primary: props }, index) => (
                <Concert key={index} {...props} />
            ))}
        </div>
    </Section>
));
