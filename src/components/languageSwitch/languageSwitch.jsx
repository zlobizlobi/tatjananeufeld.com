import React, { useEffect, useState } from "react"
import { Button, Container } from "./styles"
import { changeLocale, useIntl } from "gatsby-plugin-intl"

export const LanguageSwitch = ({ className }) => {
  const [pageLanguage, setLanguage] = React.useState('en');

  const intl = useIntl();

  React.useEffect(() => {
    setLanguage(intl.locale);
  }, [])

  const languages = ["en", "de", "ru"];

  return (
    <Container className={className}>
      {languages.map(language => (
        <Button
          key={language}
          isActive={language === pageLanguage}
          onClick={() => changeLocale(language)}
        >
          {language}
        </Button>
      ))}
    </Container>
  )
}
