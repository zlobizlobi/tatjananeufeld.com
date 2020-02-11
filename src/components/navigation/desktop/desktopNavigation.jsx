import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink, LanguageSwitch, Nav, NavList } from './styles';
import { useIntl } from 'react-intl';
import { Location } from '@reach/router';
import styled from 'styled-components';
import { Link } from 'gatsby'
import { media } from '@styles';
import { navigate } from 'gatsby'
import { createHistory } from '@reach/router'

export const PageLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 0 30px 0;
    font-size: 12px;
    letter-spacing: 2.5px; 
    color: rgba(255,255,255,0.7);
    
    ${media.md(`
        margin: 1.5px 15px 0 0;

        &:last-child{
        margin: 0;
        }
  `)}
`

export const DesktopNavigation = (props) => {
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
                                if (navLink === "partnerships" || navLink === "tatyana-podyomova") {
                                    return (
                                        <PageLink to={`/${navLink}`}>
                                            <FormattedMessage id={navLink} />
                                        </PageLink>
                                    )
                                }
                                return (
                                    <NavLink
                                        onClick={(e) => {
                                            if (location.pathname === `/${locale}/tatyana-podyomova/` || location.pathname === `/${locale}/partnerships/`) {
                                                navigate('/')
                                                return;
                                            }
                                            setIsActive([navLink])
                                        }
                                        }
                                        key={navLink}
                                        name={navLink}
                                    >
                                        <FormattedMessage id={navLink} />
                                    </NavLink>)
                            })}
                        </NavList>
                        <LanguageSwitch />
                    </Nav>
                )
            }}
        </Location>
    );
};
