import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartReducerType, ItemType} from '../../../main/m4-common/types/Types';
import com from '../../../main/m4-common/photo/Sensor_Foto_2105.jpg';


export const initialState: CartReducerType = {
    items: [{
        id: '1',
        img: com,
        title: 'Sensor',
        price: 100,
        quantityToBuy: 1,
        amountOfItem: 1,

    }],
    totalPrice: 0
};
const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setQuantity(state, action: PayloadAction<{ id: string, quantityToBuy: number }>) {
            state.items.map(item => {
                if (item.id === action.payload.id) {
                    item.quantityToBuy = action.payload.quantityToBuy;
                }
            });
        },
        addNewItem(state, action: PayloadAction<{ newItem: ItemType }>) {
            if (state.items.every(e => e.id !== action.payload.newItem.id)) {
                state.items.push(action.payload.newItem);
            } else {
                state.items.map(item => {
                    if (item.id === action.payload.newItem.id) {
                        item.quantityToBuy = item.quantityToBuy + 1;
                    }
                });
            }
        },
        setTotalPrice: function (state, action: PayloadAction) {
            // const reducer = (acc: number, value: number) => acc + value;
            state.totalPrice = state.items.map(e => e.price * e.quantityToBuy).reduce((acc: number, value: number) => acc + value);
        }
    }
});
export const cartReducer = slice.reducer;
export const {addNewItem, setQuantity, setTotalPrice} = slice.actions;

