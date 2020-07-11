import React, { useState } from 'react';
import {
    HamburgerBar,
    HamburgerButton,
    Navigation as NavigationComponent,
    Nav,
    NavLink,
    LanguageSwitch,
    PageLink,
} from './styles';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';
import { animated, useSpring, useTrail } from 'react-spring';
import { useScrollLock } from '../useScrollLock';

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

    const navLinks = [
        'home',
        'concerts',
        'biography',
        'gallery',
        'partnerships',
        'tatyana-podyomova',
        'contact',
    ];

    const NavigationList = ({ location }) => {
        const items = navLinks.map(navLink => {
            if (navLink === 'partnerships' || navLink === 'tatyana-podyomova') {
                // Some links are page links and require a gatsby Link component
                return (
                    <PageLink to={`/${navLink}`}>
                        <FormattedMessage id={navLink} />
                    </PageLink>
                );
            }
            return (
                <NavLink
                    key={navLink}
                    name={navLink}
                    onClick={() => {
                        if (
                            location.pathname ===
                            `/${locale}/tatyana-podyomova/` ||
                            location.pathname === `/${locale}/partnerships/`
                        ) {
                            navigate('/');
                            return;
                        }
                        setIsOpen(!isOpen);
                        setIsActive([navLink]);
                    }}
                    isActive={isActive.includes(navLink)}
                />
            );
        });

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
        <Location>
            {({ location }) => (
                <Nav>
                    <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
                        <Bar style={{ ...animationUpperBar }} />
                        <Bar style={{ ...animationLowerBar }} />
                        <Navigation
                            isOpen={isOpen}
                            style={{ ...visibilityAnimation }}
                        >
                            {isOpen && <NavigationList location={location} />}
                        </Navigation>
                    </HamburgerButton>
                    <LanguageSwitch />
                </Nav>
            )}
        </Location>
    );
};
