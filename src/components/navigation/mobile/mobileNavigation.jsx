import React, { useState } from "react"
import {
  Hamburger,
  HamburgerInput,
  Bars,
  Navigation,
  Nav,
  NavLink,
  LanguageSwitch,
} from "./styles"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [isActive, setIsActive] = useState(["home"])

  const { locale } = useIntl()
  const navLinks = [
    "home",
    "concerts",
    "biography",
    "gallery",
    "repertoir-partners",
    "tatyana-podyomova",
    "contact",
  ]

  const handleOnClick = navLink => {
    setIsActive([navLink])
  }

  return (
    <Nav>
      <Hamburger>
        <HamburgerInput onChange={() => setIsOpen(!isOpen)} checked={isOpen} />
        <Bars />
        <Bars />
        <Bars />
        <Navigation isOpen={isOpen}>
          {navLinks.map(navLink => (
            <NavLink
              onClick={() => {
                handleOnClick(navLink)
                setIsOpen(false)
              }}
              key={navLink}
              name={navLink}
              isActive={isActive.includes(navLink)}
            >
              <FormattedMessage id={navLink} />
            </NavLink>
          ))}
        </Navigation>
      </Hamburger>
      <LanguageSwitch />
    </Nav>
  )
}
