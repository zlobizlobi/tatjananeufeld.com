import React from "react"
import { Button, Container } from "./styles"
import { changeLocale, useIntl } from "gatsby-plugin-intl"

export const LanguageSwitch = ({ className }) => {
  const intl = useIntl();

  const languages = ["en", "de", "ru"]

  return (
    <Container className={className}>
      {languages.map(language => (
        <Button
          key={language}
          isActive={intl.locale === language}
          onClick={() => changeLocale(language)}
        >
          {language}
        </Button>
      ))}
    </Container>
  )
}
