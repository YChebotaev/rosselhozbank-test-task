import { ELEMENTS, Element, ElementType } from '../../constants/elements'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ItemsState {
  items: Element<any>[]
}

interface PlacePayload {
  type: ElementType
}

interface SetValuePayload {
  index: number,
  value: string
}

const initialState: ItemsState = {
  items: []
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    append({ items }, { payload: { type } }: PayloadAction<PlacePayload>) {
      const element = ELEMENTS[type].create(items.length)
      items.push(element)
    },
    setValue({ items }, { payload: { index, value } }: PayloadAction<SetValuePayload>) {
      items[index].value = value
    }
  }
})

export const { append, setValue } = itemsSlice.actions
export default itemsSlice.reducer
