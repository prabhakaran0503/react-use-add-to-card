import {configureStore} from '@reduxjs/toolkit'
import counterReduser from "./Slices/card-slice"

export const store=configureStore({
  reducer: {
    card:counterReduser
  } 
})