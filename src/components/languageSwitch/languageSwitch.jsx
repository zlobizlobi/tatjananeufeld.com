import React from 'react'
import { Button, Container } from './styles'
import { changeLocale, useIntl } from 'gatsby-plugin-intl'

export const LanguageSwitch = () => {

    const intl = useIntl();

    const languages = ['nl', 'de', 'ru'];

    return (
        <Container>
            {languages.map(language =>
                <Button
                    isActive={intl.locale === language}
                    onClick={() => changeLocale(language)}
                >
                    {language}
                </Button>
            )}
        </Container>
    )
}
