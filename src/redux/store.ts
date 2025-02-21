import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Aquí agregas tus reducers
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    counter: userSlice,
  },
  devTools: true,
})

// Tipos para el dispatch y el selector
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// Hooks de tipo para usar en componentes
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
