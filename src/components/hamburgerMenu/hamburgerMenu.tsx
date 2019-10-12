import * as React from 'react'
import { Hamburger, HamburgerInput, Bars, SlideMenu } from './components'
import { Link } from '../link';

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Hamburger>
            <HamburgerInput onChange={() => setIsOpen(!isOpen)} checked={isOpen} />
            <Bars />
            <Bars />
            <Bars />
            <SlideMenu isOpen={isOpen}>
                <Link onClick={() => setIsOpen(false)}>Home</Link>
                <Link onClick={() => setIsOpen(false)}>Concerten</Link>  {}
                <Link onClick={() => setIsOpen(false)}>Biografie</Link >
                <Link onClick={() => setIsOpen(false)}>Contact</Link >
            </SlideMenu >
        </Hamburger >
    )
}

