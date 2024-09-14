import { configureStore } from '@reduxjs/toolkit'
import FirebaseSlice from './Slices/FirebaseSlice'

export const store = configureStore({
  reducer: {
    Firebase: FirebaseSlice
  },
})