import "./Place.css"

import { FC } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Workbench } from '../components/Workbench'

export const Place: FC<{}> = () => {
  return (
    <div className="Place">
      <Sidebar />
        <Workbench />
    </div>
  )
}
