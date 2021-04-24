import "./Menu.css"

import { FC } from 'react'

export const Menu: FC<{}> = ({ children }) => {
  return (
    <div className="TopBar__menu">
      {children}
    </div>
  )
}
