import React, { useEffect, useState } from 'react';
import { LanguageSwitch, Nav, NavList } from './styles';
import { NavLink } from '../../navLink';

const navTitles = [
    "home",
    "concerts",
    "biography",
    "gallery",
    "partnerships",
    "tatyana-podyomova",
    "gallery",
    "contact"
]

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
                {navTitles.map(title => <NavLink key={title} title={title} active={active.includes(title)} />)}
            </NavList>
            <LanguageSwitch />
        </Nav>
    );
}
