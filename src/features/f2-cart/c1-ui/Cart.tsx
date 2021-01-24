import React, {ChangeEvent} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Checkbox, TextField} from '@material-ui/core';
import {getCartItems} from '../c2-bll/cart-selectors';
import {setQuantity} from '../c2-bll/cart-reducer';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const Cart: React.FC = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const cartItems = useSelector(getCartItems)
    const [checked, setChecked] = React.useState(false);


    const checkboxHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.currentTarget.checked);
    };
    // change amount of items to buy
    const setNewQuantity = (id: string, quantityToBuy: number) => {
        dispatch(setQuantity({id, quantityToBuy}))
    }


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
                    {cartItems.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                <Checkbox
                                    checked={checked}
                                    onChange={checkboxHandleChange}
                                    inputProps={{'aria-label': 'primary checkbox'}}
                                />
                            </TableCell>
                            <TableCell align="right"><img src={item.img} alt="" width={50} height={50}/></TableCell>
                            <TableCell align="right">{item.title}</TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                            <TableCell align="right">
                                <TextField id="outlined-basic" label="Outlined" variant="outlined"
                                           value={item.quantityToBuy}
                                           onChange={(e) => {
                                               setNewQuantity(item.id, +e.currentTarget.value)
                                           }}

                                />
                                <Button variant="contained" color="primary" size='small'
                                        onClick={() => {
                                            setNewQuantity(item.id, item.quantityToBuy + 1)
                                        }}
                                >
                                    Add one
                                </Button>
                                <Button variant="contained" color="secondary" size='small'
                                        disabled={!item.quantityToBuy}
                                        onClick={() => {
                                            setNewQuantity(item.id, item.quantityToBuy - 1)
                                        }}>
                                    Delete one
                                </Button>
                            </TableCell>
                            <TableCell align="right">{item.price * item.quantityToBuy}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
