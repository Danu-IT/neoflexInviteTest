import { configureStore } from '@reduxjs/toolkit'
import basketSlice from '../features/basket/basketSlice'
import mainSlice from '../features/main/mainSlice'

export const store = configureStore({
    reducer: {
        main: mainSlice,
        basket: basketSlice
    }
})