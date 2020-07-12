import React, { useState } from 'react';
import {
    HamburgerBar,
    HamburgerButton,
    Navigation as NavigationComponent,
    Nav,
    LanguageSwitch,
} from './styles';
import { useIntl } from 'gatsby-plugin-intl';
import { animated, useSpring, useTrail } from 'react-spring';
import { useScrollLock } from '../useScrollLock';
import { NavLink } from '../../navLink';

const Navigation = animated(props => <NavigationComponent {...props} />);

const Bar = animated(props => {
    // To animate the hamburgerBars
    return <HamburgerBar {...props} />;
});

export const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false); // State for whether the menu is open or not

    const { locale } = useIntl();

    const [isActive, setIsActive] = useState(['home']); // State for the active state of the navLinks

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
        const items = [
            <NavLink title="home" />,
            <NavLink title="concerts" />,
            <NavLink title="biography" />,
            <NavLink title="gallery" />,
            <NavLink title="partnerships" />,
            <NavLink title="tatyana-podyomova" />,
            <NavLink title="gallery" />,
            <NavLink title="contact" />
        ]

        const trail = useTrail(items.length, {
            from: { opacity: 0, transform: 'translate3d(-30px, 0px, 0)' },
            opacity: 1,
            transform: 'translate3d(0px,0px,0)',
            config: { mass: 1, tension: 400, friction: 30 },
        });

        return (
            <>
                {trail.map((styles, i) => (
                    <animated.div style={styles}>{items[i]}</animated.div>
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
