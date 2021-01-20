import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import com from '../../../main/m4-common/c2-assets/a1-img/com.jpg';
import com from '../../../main/m4-common/photo/Sensor_Foto_2105.jpg'

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


    ],
    pageSize: 10 as undefined | number,
    totalItemsCount: 14,
    currentPage: 1,
    isFetching: false,

};


const slice = createSlice({
    name: 'shop-page-size',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
            state.currentPage = action.payload.currentPage
        },
        setTotalItemsCount(state, action: PayloadAction<{ totalItemsCount: number }>) {
            state.totalItemsCount = action.payload.totalItemsCount
        },
        setPageSize(state, action: PayloadAction<{ pageSize: number }>) {
            state.pageSize = action.payload.pageSize
        }
    }
});
export const shopPageReducer = slice.reducer;
