import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import com from '../../../main/m4-common/c2-assets/a1-img/com.jpg';
import com from '../../../main/m4-common/photo/Sensor_Foto_2105.jpg'
import com2 from '../../../main/m4-common/photo/sealed-temperature-sensor-ds18b20.0.jpg'
import com3
    from '../../../main/m4-common/photo/b9ddc1e4-60a9-11e2-b313-902b346f5219_a03c6efd-4ae4-11e4-a071-d850e6bf91f5.jpg'
import com4 from '../../../main/m4-common/photo/download.jpeg'


const initialState = {
    items: [
        {
            id: '1',
            img: com,
            title: 'Sensor',
            price: 100, quantityToBuy: 1,
            amountOfItem: 1,

        },
        {
            id: '2',
            img: com2,
            title: 'Speed',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        },
        {
            id: '3',
            img: com3,
            title: 'Pressure',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        }, {
            id: '4',
            img: com4,
            title: 'Current',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,

        },
        {
            id: '5',
            img: com,
            title: 'Sensor',
            price: 100, quantityToBuy: 1,
            amountOfItem: 1,

        },
        {
            id: '6',
            img: com2,
            title: 'Speed',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        },
        {
            id: '7',
            img: com3,
            title: 'Pressure',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        }, {
            id: '8',
            img: com4,
            title: 'Current',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,

        },
        {
            id: '9',
            img: com,
            title: 'Sensor',
            price: 100, quantityToBuy: 1,
            amountOfItem: 1,

        },
        {
            id: '10',
            img: com2,
            title: 'Speed',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        },
        {
            id: '11',
            img: com3,
            title: 'Pressure',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        }, {
            id: '12',
            img: com4,
            title: 'Current',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,

        },
        {
            id: '13',
            img: com,
            title: 'Sensor',
            price: 100, quantityToBuy: 1,
            amountOfItem: 1,

        },
        {
            id: '21',
            img: com2,
            title: 'Speed',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        },
        {
            id: '32',
            img: com3,
            title: 'Pressure',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        }, {
            id: '43',
            img: com4,
            title: 'Current',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,

        },
        {
            id: '144',
            img: com,
            title: 'Sensor',
            price: 100, quantityToBuy: 1,
            amountOfItem: 1,

        },
        {
            id: '266',
            img: com2,
            title: 'Speed',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        },
        {
            id: '3866',
            img: com3,
            title: 'Pressure',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        }, {
            id: '664',
            img: com4,
            title: 'Current',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,

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
