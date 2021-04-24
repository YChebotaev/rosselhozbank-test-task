import "./MenuButton.css"

import { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const MenuButton: FC<{
  to: string
}> = ({ to, children }) => {
  return (
    <NavLink to={to} activeClassName="MenuButton--current" className="MenuButton">
      {children}
    </NavLink>
  )
}
