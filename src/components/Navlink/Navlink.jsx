import React from 'react';
import { FormattedMessage, Link as LinkComponent } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { media } from '@styles';

export const Navlink = ({ title, className }) => {
    const to = title === 'tatyana-podyomova' || title === 'partnerships' ? `/${title}` : `/#${title}`;

    return (
        <li>
            <PageLink className={className} to={to}>
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
