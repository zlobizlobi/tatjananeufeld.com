import React, { forwardRef, Fragment } from 'react';
import { Concert, Section } from '@components';
import { FormattedMessage } from 'react-intl';
import { Heading } from './styles';
import styled from 'styled-components';
import { media } from '@styles';

export const ConcertSection = forwardRef((props, ref) => (
    <Section id="concerts" ref={ref}>
        <Heading>
            <FormattedMessage id="concert_heading" />
        </Heading>
        {props.concerts.map(({ primary: props }, index) => (
            <Fragment key={index}>
                <Concert {...props} />
                <ContainerDivider />
            </Fragment>
        ))}
    </Section>
));

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
