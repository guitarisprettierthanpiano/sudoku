import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/puzzNumber/puzzNumberSlice'

export const store = configureStore({
  reducer: {
    puzzleNumber: counterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch