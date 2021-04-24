import { configureStore } from '@reduxjs/toolkit'
import items from './slices/items'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    items
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
