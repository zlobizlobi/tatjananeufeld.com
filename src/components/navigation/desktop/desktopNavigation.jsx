import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink, LanguageSwitch, Nav, NavList } from './styles';
import { navigate } from 'gatsby';
import { useIntl } from 'react-intl';
import { Location } from '@reach/router';

export const DesktopNavigation = props => {
    const [isActive, setIsActive] = React.useState(['home']);
    const { locale } = useIntl();

    const [isScrolled, setIsScrolled] = React.useState(false);

    const navLinks = [
        'home',
        'concerts',
        'biography',
        'gallery',
        'repertoir-partners',
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

    const handleOnClick = async (navLink, location) => {
        if (
            navLink === 'repertoir-partners' ||
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
                <Nav isScrolled={isScrolled}>
                    <NavList>
                        {navLinks.map(navLink => (
                            <NavLink
                                onClick={() => handleOnClick(navLink, location)}
                                key={navLink}
                                name={navLink}
                                isActive={isActive.includes(navLink)}
                            >
                                <FormattedMessage id={navLink} />
                            </NavLink>
                        ))}
                    </NavList>
                    <LanguageSwitch />
                </Nav>
            )}
        </Location>
    );
};
