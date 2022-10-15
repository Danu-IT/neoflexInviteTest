import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    fullPrice: 0
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            state.basket.push(action.payload);
        },
        deleteBasket: (state, action) => {
            console.log(action.payload);
            state.basket = state.basket.filter(el => el.id !== action.payload);
            // state.fullPrice += action.payload;
        },
        addFullPrice: (state, action) => {
            state.fullPrice += action.payload; 
        },
        removeFullPrice: (state, action) => {
            state.fullPrice -= action.payload; 
        },
        updateCount:(state, action) => {
            state.basket.forEach((el, index, array) => {
                if(el.id.includes(action.payload.id)){
                    array[index] = { 
                        ...el,
                        count: action.payload.count
                    }
                }
            })
        }
    }
})

export const { addBasket, deleteBasket, addFullPrice, removeFullPrice, updateCount} = basketSlice.actions;
export default basketSlice.reducer;