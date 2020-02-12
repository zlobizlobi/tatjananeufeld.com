import React from "react"
import { LinkComponent } from "./components"
import { FormattedMessage } from 'react-intl'

export const NavLink = ({ className, onClick, name }) => (
  <li className={className}>
    <LinkComponent onClick={onClick} to={name} smooth duration={1100}>
      <FormattedMessage id={name} />
    </LinkComponent>
  </li>
)
