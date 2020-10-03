import React from 'react';
import { Button, Container } from './styles';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';

export const LanguageSwitch = ({ className }) => {
    const { locale } = useIntl();

    return (
        <Container className={className}>
            {['en', 'de', 'ru'].map(language => (
                <Button
                    key={language}
                    isActive={language === locale}
                    onClick={() => changeLocale(language)}
                >
                    {language}
                </Button>
            ))}
        </Container>
    );
};
