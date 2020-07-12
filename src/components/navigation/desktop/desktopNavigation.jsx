import React, { useEffect, useState } from 'react';
import { LanguageSwitch, Nav, NavList } from './styles';
import { NavLink } from '../../navLink';

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
                <NavLink title="home" />
                <NavLink title="concerts" />
                <NavLink title="biography" />
                <NavLink title="gallery" />
                <NavLink title="partnerships" />
                <NavLink title="tatyana-podyomova" />
                <NavLink title="contact" />
            </NavList>
            <LanguageSwitch />
        </Nav>
    );
}
