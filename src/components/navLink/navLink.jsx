import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { AnchorLink as AnchorLinkComponent } from "gatsby-plugin-anchor-links";
import styled, { css } from 'styled-components';
import { Link as LinkComponent } from 'gatsby';
import { media } from '@styles';

export const NavLink = ({ title }) => {
    const { locale } = useIntl();

    return (
        <li>
            {(title === 'tatyana-podyomova' || title === 'partnerships') ?
                (
                    <PageLink to={`/${title}`}>
                        <FormattedMessage id={title} />
                    </PageLink>
                ) : (
                    <AnchorLink to={`/${locale}/#${title}`}>
                        <FormattedMessage id={title} />
                    </AnchorLink>
                )}
        </li>
    )
}

const navLinkStyles = css`
    text-decoration: none;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    transition: color 0.3s ease;
    color: rgba(255,255,255,0.7);
    font-size: 16px;
    
    &:hover {
        color: rgba(255, 255, 255, 1);
    }

    ${media.md(`
        margin: 0 15px 0 0;
    `)}
`
const AnchorLink = styled(AnchorLinkComponent)`
    font-size: 12px;

    ${navLinkStyles}
`;

export const PageLink = styled(LinkComponent).attrs({
    activeStyle: {
        color: 'white'
    }
})`
    ${navLinkStyles}
`;
