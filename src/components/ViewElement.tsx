import { ComponentType, FC, useMemo } from 'react'
import { ELEMENTS, ElementType } from '../constants/elements'

import { createItemLabelSelector } from '../store/selectors/createItemLabelSelector'
import { useSelector } from 'react-redux'

export const ViewElement: FC<{
  type: ElementType
  index: number
}> = (props) => {
  const { type, index } = props
  const labelSelector = useMemo(() => createItemLabelSelector(index), [index])
  const descr = ELEMENTS[type]
  const Component = descr.view.component as ComponentType<any>
  const label = useSelector(labelSelector)

  return <Component {...props} label={label} />
}
