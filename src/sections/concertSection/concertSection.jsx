import React from 'react';
import { Concert } from '@components';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Section, Heading } from './styles';

export const ConcertSection = () => {
    const prismicRowData = useStaticQuery(graphql`
        query Concertss {
            prismicMainPage {
                data {
                    body {
                        primary {
                            name
                            city
                            venue
                            hall
                            date
                            program
                            vendors
                            file {
                                url
                            }
                            poster {
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    const {
        prismicMainPage: {
            data: { body: concerts },
        },
    } = prismicRowData;

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
