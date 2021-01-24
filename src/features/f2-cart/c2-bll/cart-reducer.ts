import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartReducerType, ItemType} from '../../../main/m4-common/types/Types';


export const initialState: CartReducerType = {
    items: []
};
const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setQuantity(state, action: PayloadAction<{ id: string, quantityToBuy: number }>) {
            state.items.map(item => {
                if (item.id === action.payload.id) {
                    item.quantityToBuy = action.payload.quantityToBuy
                }
            })
        },
        addNewItem(state, action: PayloadAction<{ newItem: ItemType }>) {
            if (state.items.every(e => e.id !== action.payload.newItem.id)) {
                state.items.push(action.payload.newItem)
            } else {
                state.items.map(item => {
                    if (item.id === action.payload.newItem.id) {
                        item.quantityToBuy = item.quantityToBuy + 1
                    }
                })
            }
        },
    }
});
export const cartReducer = slice.reducer;
export const {addNewItem, setQuantity} = slice.actions

