import React, { useState } from "react"
import {
  Hamburger,
  HamburgerInput,
  Bars,
  SlideMenu,
  Nav,
  NavLink,
  LanguageSwitch,
} from "./styles"
import { FormattedMessage } from "gatsby-plugin-intl"

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [isActive, setIsActive] = useState(["home"])

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
        <SlideMenu isOpen={isOpen}>
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
        </SlideMenu>
      </Hamburger>
      <LanguageSwitch />
    </Nav>
  )
}
