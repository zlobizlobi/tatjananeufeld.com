import React from 'react'
import { Nav, NavList, NavLink } from './styles'
import { FormattedMessage } from 'react-intl'

export const DesktopMenu = () => {
    return (
        <Nav>
            <NavList>
                <NavLink><FormattedMessage id="home" /></NavLink>
                <NavLink><FormattedMessage id="concerts" /></NavLink>
                <NavLink><FormattedMessage id="biography" /></NavLink>
                <NavLink><FormattedMessage id="gallery" /></NavLink>
                <NavLink><FormattedMessage id="repertoir" /></NavLink>
                <NavLink><FormattedMessage id="partners" /></NavLink>
                <NavLink><FormattedMessage id="teacher" /></NavLink>
                <NavLink><FormattedMessage id="contact" /></NavLink>
            </NavList>
        </Nav>
    )
}
