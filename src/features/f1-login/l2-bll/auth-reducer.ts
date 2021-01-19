import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false
};
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{value:boolean}>) {
            state.isLoggedIn = action.payload.value;
        }
    }
});

export const authReducer = slice.reducer;
