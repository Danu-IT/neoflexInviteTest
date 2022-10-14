import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    fullPrice: 0,
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            state.basket.push(action.payload);
        },
        deleteBasket: (state, action) => {
            state.basket = state.basket.filter(el => el.id !== action.payload);
        },
        addFullPrice: (state, action) => {
            state.fullPrice += action.payload; 
        },
        removeFullPrice: (state, action) => {
            state.fullPrice -= action.payload; 
        }
    }
})

export const { addBasket, deleteBasket, addFullPrice, removeFullPrice } = basketSlice.actions;
export default basketSlice.reducer;