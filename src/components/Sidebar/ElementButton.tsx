import "./ElementButton.css"

import { ElementType } from '../../constants/elements'
import { FC } from 'react'
import { append } from '../../store/slices/items'
import { useAppDispatch } from '../../store'

export const ElementButton: FC<{
  type: ElementType
}> = ({ type, children }) => {
  const dispatch = useAppDispatch()

  return (
    <button className="ElementButton" onClick={() => { dispatch(append({ type })) }}>
      {children}
    </button>
  )
}
