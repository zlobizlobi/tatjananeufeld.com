import React from "react"
import { FormattedMessage } from "react-intl"
import { NavLink, LanguageSwitch, Nav, NavList } from './styles'

export const DesktopMenu = () => {
  const [isActive, setIsActive] = React.useState(["home"])

  const [isScrolled, setIsScrolled] = React.useState(false)

  const navLinks = [
    "home",
    "concerts",
    "biography",
    "gallery",
    "repertoir",
    "partners",
    "teacher",
    "contact",
  ]

  const handleScroll = () => {
    if (window.pageYOffset > 350) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  })

  const handleOnClick = navLink => {
    setIsActive([navLink])
  }
  return (
    <Nav isScrolled={isScrolled}>
      <NavList>
        {navLinks.map(navLink => (
          <NavLink
            onClick={() => handleOnClick(navLink)}
            key={navLink}
            name={navLink}
            isActive={isActive.includes(navLink)}
          >
            <FormattedMessage id={navLink} />
          </NavLink>
        ))}
      </NavList>
      <LanguageSwitch />
    </Nav>
  )
}
