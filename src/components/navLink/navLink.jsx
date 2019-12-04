import React from 'react'
import { LinkComponent } from './components'

export const NavLink = ({ children }) => (
    <li>
        <LinkComponent smooth duration={1100}>
            {children}
        </LinkComponent>
    </li>

)
