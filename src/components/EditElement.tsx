import { ELEMENTS, ElementType } from '../constants/elements'
import React, { ComponentType, FC, useCallback, useMemo } from 'react'

import { createItemLabelSelector } from '../store/selectors/createItemLabelSelector'
import { createItemValueSelector } from '../store/selectors/createItemValueSelector'
import { setValue } from '../store/slices/items'
import { useAppDispatch } from '../store'
import { useSelector } from 'react-redux'

export const EditElement: FC<{
  type: ElementType
  index: number
}> = (props) => {
  const dispatch = useAppDispatch()
  const { type, index } = props
  const valueSelector = useMemo(() => createItemValueSelector(index), [index])
  const labelSelector = useMemo(() => createItemLabelSelector(index), [index])
  const descr = ELEMENTS[type]
  const Component = descr.edit.component as ComponentType<any>
  const value = useSelector(valueSelector)
  const label = useSelector(labelSelector)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue({
      index,
      value: e.target.value
    }))
  }, [dispatch, index])

  return <Component {...props} value={value} label={label} onChange={handleChange} />
}
