import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: []
};


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {

    }
});
export const cartReducer = slice.reducer;
