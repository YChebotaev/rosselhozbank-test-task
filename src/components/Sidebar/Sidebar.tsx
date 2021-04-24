import "./Sidebar.css"

import { ELEMENTS } from '../../constants/elements'
import { ElementButton } from './ElementButton'
import { FC } from 'react'

export const Sidebar: FC<{}> = () => {
  return (
    <div className="Sidebar">
      {Object.values(ELEMENTS).map(({ type, displayName }) => {
        return <ElementButton key={type} type={type}>{displayName}</ElementButton>
      })}
    </div>
  )
}
