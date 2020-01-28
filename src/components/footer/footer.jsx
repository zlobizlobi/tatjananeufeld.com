import React, { useState } from 'react'
import { FooterComponent, Name, NavList, NavLink, IconContainer, Youtube, Facebook, CopyRighText} from './styles'
import { navigate } from "gatsby"
import { Location } from "@reach/router"
import { useIntl } from "react-intl"
import { FormattedMessage } from "react-intl"

const navLinks = [
  "home",
  "concerts",
  "biography",
  "gallery",
  "repertoir-partners",
  "tatyana-podyomova",
  "contact",
]

export const Footer = () => {
  const [isActive, setIsActive] = useState(["home"])
  
  const { locale } = useIntl()

    const handleOnClick = async (navLink, location) => {
        if (navLink === "repertoir-partners" || navLink === "tatyana-podyomova") {
          navigate(navLink)
          return
        }
        if (
          location.pathname  === `/${locale}/tatyana-podyomova/` ||
          location.pathname === `/${locale}/repertoir-partners/`
        ) {
          await navigate("/")
          setIsActive([navLink])
          return
        }
    
        setIsActive([navLink])
      }
    
    return (
        <Location>
          {({location}) => (
          <FooterComponent>
            <Name>Tatjana Neufeld</Name>
            <NavList>
              {navLinks.map(navLink => (
                <NavLink
                  onClick={() => handleOnClick(navLink, location)}
                  key={navLink}
                  name={navLink}
                >
                  <FormattedMessage id={navLink} />
                </NavLink>
              ))}
            </NavList>
            <IconContainer>
              <Youtube />
              <Facebook />
            </IconContainer>
            <CopyRighText>
              © Copyright Tatjana Neufeld 2020,
                Made by zlobizlobi
              </CopyRighText>
        </FooterComponent>
          )}
        </Location>
    )
}