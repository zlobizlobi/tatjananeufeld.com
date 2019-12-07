import React from 'react'
import { LinkComponent } from './components'

export const NavLink = ({ children, className }) => (
    <li className={className}>
        <LinkComponent smooth duration={1100}>
            {children}
        </LinkComponent>
    </li>

)
