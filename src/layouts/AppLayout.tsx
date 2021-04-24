import "./AppLayout.css"

import { FC } from 'react'
import { TopBar } from '../components/TopBar'

export const AppLayout: FC<{}> = ({ children }) => {
  return (
    <div className="AppLayout">
      <div className="AppLayout__topBar">
        <TopBar />
      </div>
      <div className="AppLayout__content">
        {children}
      </div>
    </div>
  )
}
