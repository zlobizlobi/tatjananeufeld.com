import React from 'react'
import { Hamburger, HamburgerInput, Bars, SlideMenu, Nav } from './styles'
import { NavLink } from '../../navLink';
import { FormattedMessage, changeLocale } from 'gatsby-plugin-intl'

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Nav>
            <Hamburger>
                <HamburgerInput onChange={() => setIsOpen(!isOpen)} checked={isOpen} />
                <Bars />
                <Bars />
                <Bars />
                <SlideMenu isOpen={isOpen}>
                    <NavLink onClick={() => setIsOpen(false)}><FormattedMessage id="contact" /></NavLink>
                    <NavLink onClick={() => setIsOpen(false)}><FormattedMessage id="home" /></NavLink>
                    <NavLink onClick={() => setIsOpen(false)}><FormattedMessage id="home" /></NavLink>
                    <NavLink onClick={() => setIsOpen(false)}><FormattedMessage id="home" /></NavLink>
                    <button onClick={() => changeLocale('de')} style={{ color: 'white' }}>de</button>
                    <button onClick={() => changeLocale('nl')} style={{ color: 'white' }}>nl</button>
                </SlideMenu >
            </Hamburger>
        </Nav>
    )
}

