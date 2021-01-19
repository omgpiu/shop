import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
    error: null as string | null,
    isInitialized: false
};


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error;
        },
        setAppStatusAC(state, action: PayloadAction<{ status: any }>) {
            state.status = action.payload.status;
        },
        setIsInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
            state.isInitialized = action.payload.isInitialized;
        }
    }
});
export const appReducer = slice.reducer;