import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink, LanguageSwitch, Nav, NavList, PageLink } from './styles';
import { useIntl } from 'react-intl';
import { Location } from '@reach/router';
import { navigate } from 'gatsby';

export const DesktopNavigation = () => {
    const [isActive, setIsActive] = React.useState(['home']);

    const { locale } = useIntl();

    const [isScrolled, setIsScrolled] = React.useState(false);

    const navLinks = [
        'home',
        'concerts',
        'biography',
        'gallery',
        'partnerships',
        'tatyana-podyomova',
        'contact',
    ];

    const handleScroll = () => {
        if (window.pageYOffset > 350) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <Location>
            {({ location }) => {
                return (
                    <Nav isScrolled={isScrolled}>
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
                                        onClick={e => {
                                            if (
                                                location.pathname ===
                                                    `/${locale}/tatyana-podyomova/` ||
                                                location.pathname ===
                                                    `/${locale}/partnerships/`
                                            ) {
                                                localStorage.setItem(
                                                    'clicked',
                                                    e.target.textContent
                                                );
                                                navigate('/');
                                                return;
                                            }
                                            setIsActive([navLink]);
                                        }}
                                        key={navLink}
                                        name={navLink}
                                        isActive={isActive.includes(navLink)}
                                    />
                                );
                            })}
                        </NavList>
                        <LanguageSwitch />
                    </Nav>
                );
            }}
        </Location>
    );
};
