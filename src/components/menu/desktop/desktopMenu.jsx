import React from 'react'
import { Nav, NavList, NavLink, Divider } from './styles'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { LanguageSwitch } from '../../languageSwitch'

export const DesktopMenu = () => {
    const [isActive, setIsActive] = React.useState(['home'])

    const navLinks = ['home', 'concerts', 'biography', 'gallery', 'repertoir', 'partners', 'teacher', 'contact'];

    const handleOnClick = (navLink) => {
        setIsActive([navLink])
    }

    return (
        <Nav>
            <NavList>
                {navLinks.map(navLink =>
                    <NavLink
                        onClick={() => handleOnClick(navLink)}
                        key={navLink}
                        name={navLink}
                        isActive={isActive.includes(navLink)}
                    >
                        <FormattedMessage id={navLink} />
                    </NavLink>
                )}
            </NavList>
            <Divider />
            <LanguageSwitch />
        </Nav>
    )
}
