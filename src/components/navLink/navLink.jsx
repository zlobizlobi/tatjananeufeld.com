import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { Link as LinkComponent } from 'gatsby';
import { media } from '@styles';

export const NavLink = ({ title, className }) => {
    const { locale } = useIntl();

    return (
        <li>
            <PageLink
                className={className}
                to={
                    title === 'tatyana-podyomova' || title === 'partnerships'
                        ? `/${title}`
                        : `/${locale}/#${title}`
                }
            >
                <FormattedMessage id={title} />
            </PageLink>
        </li>
    );
};

export const PageLink = styled(LinkComponent)`
    text-decoration: none;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    transition: color 0.3s ease;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.7);

    :hover {
        color: rgba(255, 255, 255, 1);
    }

    ${media.md(`
        margin: 0 10px 0 0;
    `)}
`;
