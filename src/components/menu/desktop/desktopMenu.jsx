import React from 'react'
import { Nav, NavList, NavLink } from './styles'
import { FormattedMessage } from 'react-intl'

export const DesktopMenu = () => {
    const [isActive, setIsActive] = React.useState([])
    const navLinks = ['home', 'concerts', 'biography', 'gallery', 'repertoir', 'partners', 'teacher', 'contact'];

    const handleOnClick = (navLink) => {
        setIsActive([navLink])
    }

    return (
        <Nav>
            <NavList>
                {navLinks.map(navLink => {
                    return (
                        <NavLink onClick={() => handleOnClick(navLink)}
                            key={navLink}
                            name={navLink}
                            isActive={isActive.includes(navLink)}
                        >
                            <FormattedMessage
                                id={navLink}
                            />
                        </NavLink>
                    )
                })}
            </NavList>
        </Nav>
    )
}
