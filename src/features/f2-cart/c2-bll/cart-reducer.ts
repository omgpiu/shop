import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartReducerType, ItemType} from '../../../main/m4-common/types/Types';
import com from '../../../main/m4-common/photo/Sensor_Foto_2105.jpg';


export const initialState: CartReducerType = {
    items: [
        {
            id: 16,
            img: com,
            title: 'Pressure',
            price: 100
        },
    ]
};


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addNewItem(state, action: PayloadAction<{ item: ItemType }>) {
            state.items.push(action.payload.item)
        },

    }
});
export const cartReducer = slice.reducer;
export const {addNewItem} = slice.actions

