import React, { useState, useEffect } from 'react';
import {
    HamburgerBar,
    HamburgerButton,
    Navigation as NavigationComponent,
    Nav,
    NavLink,
    LanguageSwitch,
} from './styles';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';
import { animated, useSpring, useTrail } from 'react-spring'

const Hamburgerbar = animated(props => {
    return <HamburgerBar {...props} />
})

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

    const animationUpperBar = useSpring({
        transform: isOpen ? ' translateY(8.5px) rotate(135deg)' : 'translateY(0px) rotate(0deg)',
    })

    const animationLowerBar = useSpring({
        transform: isOpen ? 'translateY(-4.5px) rotate(-135deg)' : 'translateY(0px) rotate(0deg)',
    })

    const visibilityAnimation = useSpring({
        opacity: isOpen ? '1' : '0',
        visibility: isOpen ? 'visible' : 'hidden'
    })

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

    const Navigation = animated(props => <NavigationComponent {...props} />)

    const NavigationList = ({ location }) => {
        const items = [
            <NavLink
                onClick={() => {
                    setIsOpen(!isOpen)
                    handleOnClick('home', location)
                }
                }
                key={'home'}
                name={'home'}
                isActive={isActive.includes('home')}
            >
                <FormattedMessage id='home' />
            </NavLink>,
            <NavLink
                onClick={() => {
                    setIsOpen(!isOpen)
                    handleOnClick('concerts', location)
                }
                }
                key={'concerts'}
                name={'concerts'}
                isActive={isActive.includes('concerts')}
            >
                <FormattedMessage id='concerts' />
            </NavLink>,
            <NavLink
                onClick={() => {
                    setIsOpen(!isOpen)
                    handleOnClick('biography', location)
                }
                }
                key={'biography'}
                name={'biography'}
                isActive={isActive.includes('biography')}
            >
                <FormattedMessage id='biography' />
            </NavLink>,
            <NavLink
                onClick={() => {
                    setIsOpen(!isOpen)
                    handleOnClick('gallery', location)
                }
                }
                key={'gallery'}
                name={'gallery'}
                isActive={isActive.includes('gallery')}
            >
                <FormattedMessage id='gallery' />
            </NavLink>,
            <NavLink
                onClick={() => {
                    setIsOpen(!isOpen)
                    handleOnClick('partnerships', location)
                }
                }
                key={'partnerships'}
                name={'partnerships'}
                isActive={isActive.includes('partnerships')}
            >
                <FormattedMessage id='partnerships' />
            </NavLink>,
            <NavLink
                onClick={() => {
                    setIsOpen(!isOpen)
                    handleOnClick('tatyana-podyomova', location)
                }
                }
                key={'tatyana-podyomova'}
                name={'tatyana-podyomova'}
                isActive={isActive.includes('tatyana-podyomova')}
            >
                <FormattedMessage id='tatyana-podyomova' />
            </NavLink>,
            <NavLink
                onClick={() => {
                    setIsOpen(!isOpen)
                    handleOnClick('contacts', location)
                }
                }
                key={'contacts'}
                name={'contacts'}
                isActive={isActive.includes('contacts')}
            >
                <FormattedMessage id='contact' />
            </NavLink>,
        ]

        const trail = useTrail(items.length, {
            from: { opacity: 0, transform: 'translate3d(-30px,0px,0)' },
            opacity: 1,
            transform: 'translate3d(0px,0px,0)',
            config: { mass: 1, tension: 400, friction: 30 },
        })

        return (
            <>
                {trail.map((styles, i) => (
                    <animated.div style={styles}>{items[i]}</animated.div>
                ))}
            </>
        )
    }

    return (
        <Location>
            {({ location }) => (
                <Nav>
                    <HamburgerButton
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Hamburgerbar style={{ ...animationUpperBar }} />
                        <Hamburgerbar style={{ ...animationLowerBar }} />
                        <Navigation isOpen={isOpen} style={{ ...visibilityAnimation }}>
                            {isOpen && <NavigationList location={location} />}
                        </Navigation>
                    </HamburgerButton>
                    <LanguageSwitch />
                </Nav>
            )
            }
        </Location >
    );
};
