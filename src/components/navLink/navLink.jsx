import React from 'react'
import { LinkComponent } from './components'

export const NavLink = ({ children, className, onClick, name }) => (
    <li className={className} >
        <LinkComponent onClick={onClick} to={name} smooth duration={1100}>
            {children}
        </LinkComponent>
    </li>

)
