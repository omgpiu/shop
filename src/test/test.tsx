import com from '../main/m4-common/photo/Sensor_Foto_2105.jpg';

import React, {ChangeEvent, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';
import {getCartItems, getQuantity} from '../features/f2-cart/c2-bll/cart-selectors';
import {initialState, setQuantity} from '../features/f2-cart/c2-bll/cart-reducer';
import {rootReducer} from '../main/m2-bll/store';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const rows = [
    {
        id: 1,
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

];

export const CartTable = () => {
    const [values, setValue] = useState('1')
    const dispatch = useDispatch()
    // const getQuantityItem = useSelector(getQuantity({},17))

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setValue(e.currentTarget.value)

        dispatch(setQuantity({id: 1, quantityToBuy: +e.currentTarget.value}))

        // if (+values >= 0) {
        //     setValue(e.currentTarget.value)
        // } else if (+values < 0) {
        //     setValue('0')
        // }

    }


    const classes = useStyles();
    const cartItems = useSelector(getCartItems)
    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Selected Items</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Subtotal</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartItems.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <input type='checkbox'/>
                            </TableCell>
                            <TableCell align="right"><img src={row.img} alt="" width={50} height={50}/></TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right"><input type='number' value={values} min='0' key={row.id}
                                                            onChange={onChangeHandler}/></TableCell>
                            <TableCell align="right">{row.price * +values}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}