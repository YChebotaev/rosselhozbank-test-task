import "./TopBar.css"

import { Author } from './Author'
import { FC } from 'react'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { MenuButton } from './MenuButton'

export const TopBar: FC<{}> = () => {
  return (
    <div className="TopBar">
      <Logo />
      <Menu>
        <MenuButton to="/place">Размещение</MenuButton>
        <MenuButton to="/edit">Редактирование</MenuButton>
        <MenuButton to="/view">Просмотр</MenuButton>
      </Menu>
      <Author />
    </div>
  )
}
