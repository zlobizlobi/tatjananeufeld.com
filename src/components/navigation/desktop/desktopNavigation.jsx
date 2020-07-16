import React, { useEffect, useState } from 'react';
import { LanguageSwitch, Nav, NavList } from './styles';
import { NavLink } from '../../navLink';
import { NAV_TITLES } from '../../../constants/navTitles';


export const DesktopNavigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 350) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <Nav isScrolled={isScrolled}>
            <NavList>
                {NAV_TITLES.map(title => <NavLink key={title} title={title} />)}
            </NavList>
            <LanguageSwitch />
        </Nav>
    );
}
