import "./Workbench.css"

import { FC } from 'react'
import { PlaceElement } from '../PlaceElement'
import { itemsSelector } from '../../store/selectors/itemsSelector'
import { useSelector } from 'react-redux'

export const Workbench: FC<{}> = () => {
  const items = useSelector(itemsSelector)

  return (
    <div className="Workbench">
      {items.map((item, index) => {
        return <PlaceElement key={item.id} {...item} index={index} />
      })}
    </div>
  )
}
