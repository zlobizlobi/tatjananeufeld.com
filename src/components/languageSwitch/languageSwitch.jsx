import React, { useEffect, useState } from 'react';
import { Button, Container } from './styles';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';

export const LanguageSwitch = ({ className }) => {
    const [pageLanguage, setLanguage] = useState('en');

    const { locale } = useIntl();

    useEffect(() => {
        setLanguage(locale);
    }, [locale]);

    console.log(pageLanguage);

    return (
        <Container className={className}>
            {['en', 'de', 'ru'].map(language => (
                <Button
                    key={language}
                    isActive={language === pageLanguage}
                    onClick={() => changeLocale(language)}
                >
                    {language}
                </Button>
            ))}
        </Container>
    );
};
