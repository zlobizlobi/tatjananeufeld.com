import React, { useState, useEffect } from 'react';
import {
    Hamburger,
    HamburgerInput,
    Bars,
    Navigation,
    Nav,
    NavLink,
    LanguageSwitch,
} from './styles';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';

export const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { locale } = useIntl();

    const [isActive, setIsActive] = useState(['home']);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        'home',
        'concerts',
        'biography',
        'gallery',
        'partnerships',
        'tatyana-podyomova',
        'contact',
    ];

    const handleOnClick = async (navLink, location) => {
        if (
            navLink === 'partnerships' ||
            navLink === 'tatyana-podyomova'
        ) {
            navigate(navLink);
            return;
        }

        if (
            location.pathname === `/${locale}/tatyana-podyomova/` ||
            location.pathname === `/${locale}/repertoir-partners/`
        ) {
            await navigate('/');
            setIsActive([navLink]);
            return;
        }

        setIsActive([navLink]);
    };

    return (
        <Location>
            {({ location }) => (
                <Nav>
                    <Hamburger>
                        <HamburgerInput
                            onChange={() => setIsOpen(!isOpen)}
                            checked={isOpen}
                        />
                        <Bars />
                        <Bars />
                        <Bars />
                        <Navigation isOpen={isOpen}>
                            {navLinks.map(navLink => (
                                <NavLink
                                    onClick={() => {
                                        setIsOpen(!isOpen)
                                        handleOnClick(navLink, location)
                                    }
                                    }
                                    key={navLink}
                                    name={navLink}
                                    isActive={isActive.includes(navLink)}
                                >
                                    <FormattedMessage id={navLink} />
                                </NavLink>
                            ))}
                        </Navigation>
                    </Hamburger>
                    <LanguageSwitch />
                </Nav>
            )
            }
        </Location >
    );
};
