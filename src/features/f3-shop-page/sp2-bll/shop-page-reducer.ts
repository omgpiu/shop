import {createSlice} from '@reduxjs/toolkit';
import com from '../../../main/m4-common/c2-assets/a1-img/com.jpg';

const initialState = {
    items: [
        {
            id: 1,
            img: com,
            title: 'Pressure',
            price: 100
        },
        {
            id: 2,
            img: com,
            title: 'Pressure',
            price: 100
        },
        {
            id: 3,
            img: com,
            title: 'Pressure',
            price: 100
        }, {
            id: 4,
            img: com,
            title: 'Pressure',
            price: 100
        },


    ]
};


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {}
});
export const shopPageReducer = slice.reducer;
