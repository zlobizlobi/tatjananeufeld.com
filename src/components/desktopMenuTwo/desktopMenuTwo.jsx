import React from "react"
import styled, { css, keyframes } from "styled-components"
import { FormattedMessage } from "react-intl"
import { NavLink as NavLinkComponent } from "../navLink"
import { media } from "../../styles"

const navbarAnimation = keyframes`
    0% {
        top: -30px;
    }
    50% {
        top: -15px;
    }
    100% {
        top: 0px;
    }
`

export const Nav = styled.nav`
  width: 100%;
  background-color: ${({ isScrolled }) =>
        isScrolled ? "#0d0d0d" : "transparent"};
  position: ${({ isScrolled }) => (isScrolled ? "fixed" : "absolute")};
  display: none;
  color: white;
  z-index: 2;
  transition: all 0.3s ease;
  padding: 15px 10px;
  line-height: 25px;

  ${({ isScrolled }) =>
        isScrolled &&
        css`
      animation: 0.3s ${navbarAnimation} ease;
    `}

  ${media.md(`
        display: flex;
        align-items: center;
        justify-content: center;
    `)}
`

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: center;
`

export const NavLink = styled(NavLinkComponent)`
  font-family: "Montserrat", serif;
  transition: left 0.3s ease-in-out;
  color: rgba(255, 255, 255, 0.7);
  margin-right: 15px;
  text-transform: uppercase;

  :hover {
    left: 10px;
    color: rgba(255, 255, 255, 1);
  }

  ${({ isActive }) =>
        isActive &&
        css`
      color: white;
    `}

  &:last-child > a {
    margin: 0;
  }

  &:nth-child(5) > a {
    font-weight: light;
    padding: 0 15px;
    font-size: 16px;
  }

  > a {
    font-size: 12px;
  }
`
export const DesktopMenuTwo = () => {
    const [isActive, setIsActive] = React.useState(["Tatjana Neufeld"])

    const [isScrolled, setIsScrolled] = React.useState(false)

    const navLinks = [
        "home",
        "concerts",
        "biography",
        "gallery",
        "Tatjana Neufeld",
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
        </Nav>
    )
}
