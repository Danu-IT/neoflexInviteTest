import { createSlice } from "@reduxjs/toolkit";
import { headphones } from "../../utils";

const initialState = {
    main: [...headphones],
    wired: [],
    wireless: [],
}


export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers:{
        setWired: (state) => {
            state.wired = state.main.filter(el => el.wired ? true : false);
        },
        setWireless: (state) => {
            state.wireless = state.main.filter(el => el.wired ? false : true);
        }
    }
})

export const { setWired, setWireless } = mainSlice.actions;
export default mainSlice.reducer;