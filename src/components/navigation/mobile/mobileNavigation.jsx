import React, { useState } from 'react';
import {
    HamburgerBar,
    HamburgerButton,
    Navigation as NavigationComponent,
    Nav,
    LanguageSwitch,
} from './styles';
import { animated, useSpring, useTrail } from 'react-spring';
import { useScrollLock } from '../useScrollLock';
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

const Navigation = animated(props => <NavigationComponent {...props} />);

const Bar = animated(props => <HamburgerBar {...props} />);

export const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    useScrollLock(isOpen);

    const animationUpperBar = useSpring({
        transform: isOpen
            ? ' translateY(8.5px) rotate(135deg)'
            : 'translateY(0px) rotate(0deg)',
    });

    const animationLowerBar = useSpring({
        transform: isOpen
            ? 'translateY(-4.5px) rotate(-135deg)'
            : 'translateY(0px) rotate(0deg)',
    });

    const visibilityAnimation = useSpring({
        visibility: isOpen ? 'visible' : 'hidden',
        opacity: isOpen ? '1' : '0',
    });

    const NavigationList = () => {

        const navLinks = navTitles.map(title => <NavLink title={title} />);

        const trail = useTrail(navLinks.length, {
            from: { opacity: 0, transform: 'translate3d(-30px, 0px, 0)' },
            opacity: 1,
            transform: 'translate3d(0px,0px,0)',
            config: { mass: 1, tension: 400, friction: 30 },
        });

        return (
            <>
                {trail.map((styles, i) => (
                    <animated.div style={styles}>{navLinks[i]}</animated.div>
                ))}
            </>
        );
    };

    return (
        <Nav>
            <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
                <Bar style={{ ...animationUpperBar }} />
                <Bar style={{ ...animationLowerBar }} />
                <Navigation
                    isOpen={isOpen}
                    style={{ ...visibilityAnimation }}
                >
                    {isOpen && <NavigationList />}
                </Navigation>
            </HamburgerButton>
            <LanguageSwitch />
        </Nav>
    );
};
