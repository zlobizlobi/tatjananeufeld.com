import React from 'react';
import {
    FooterComponent,
    Name,
    NavList,
    NavLink,
    IconContainer,
    Youtube,
    Facebook,
    CopyRighText,
    PageLink,
} from './styles';
import { FormattedMessage, useIntl } from 'react-intl';
import { Location } from '@reach/router';
import { navigate } from 'gatsby';

const navLinks = [
    'home',
    'concerts',
    'biography',
    'gallery',
    'partnerships',
    'tatyana-podyomova',
    'contact',
];

export const Footer = () => {
    const { locale } = useIntl();

    return (
        <Location>
            {({ location }) => (
                <FooterComponent>
                    <Name>Tatjana Neufeld</Name>
                    <NavList>
                        {navLinks.map(navLink => {
                            if (
                                navLink === 'partnerships' ||
                                navLink === 'tatyana-podyomova'
                            ) {
                                return (
                                    <PageLink to={`/${navLink}`}>
                                        <FormattedMessage id={navLink} />
                                    </PageLink>
                                );
                            }
                            return (
                                <NavLink
                                    onClick={() => {
                                        if (
                                            location.pathname ===
                                                `/${locale}/tatyana-podyomova/` ||
                                            location.pathname ===
                                                `/${locale}/partnerships/`
                                        ) {
                                            navigate('/');
                                            return;
                                        }
                                    }}
                                    key={navLink}
                                    name={navLink}
                                />
                            );
                        })}
                    </NavList>
                    <IconContainer>
                        <a
                            style={{ padding: '10px 10px' }}
                            href="https://youtube.com"
                        >
                            <Youtube />
                        </a>
                        <a
                            style={{ padding: '10px 10px' }}
                            href="https://youtube.com"
                        >
                            <Facebook />
                        </a>
                    </IconContainer>
                    <CopyRighText>
                        © Copyright Tatjana Neufeld 2020, Made by{' '}
                        <a
                            href="https://github.com/zlobizlobi"
                            style={{
                                color: 'white',
                            }}
                        >
                            zlobizlobi
                        </a>
                    </CopyRighText>
                </FooterComponent>
            )}
        </Location>
    );
};
