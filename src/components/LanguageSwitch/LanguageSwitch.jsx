import React, { useState, useEffect } from 'react';
import { Button, Container } from './styles';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';

export const LanguageSwitch = ({ className }) => {
    const [pageLanguage, setPageLanguage] = useState(null);

    const { locale } = useIntl();

    useEffect(() => {
        setPageLanguage(locale);
    }, [locale]);

    return (
        <Container className={className}>
            {['en', 'de', 'ru'].map(language => (
                <Button
                    key={language}
                    isActive={pageLanguage === language}
                    onClick={() => changeLocale(language)}
                >
                    {language}
                </Button>
            ))}
        </Container>
    );
};
