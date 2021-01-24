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
import st from './cart.module.css'


const useStyles = makeStyles({
    table: {
        minWidth: 650,

    },
});

export const Cart: React.FC = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const cartItems = useSelector(getCartItems)
    // const [checked, setChecked] = React.useState(false);


    // const checkboxHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setChecked(event.currentTarget.checked);
    // };
    // change amount of items to buy
    const setNewQuantity = (id: string, quantityToBuy: number) => {
        dispatch(setQuantity({id, quantityToBuy}))
    }


    return (
        <TableContainer component={Paper} style={{width: '80%', margin: '0 auto'}}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={st.header}>
                    <TableRow>
                        <TableCell>Selected Items</TableCell>
                        <TableCell align="left">Unit Price</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Subtotal</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody className={st.tableBody}>
                    {cartItems.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                <Checkbox

                                    inputProps={{'aria-label': 'primary checkbox'}}
                                />
                            </TableCell>
                            <TableCell align="left"><img src={item.img} alt={item.title}/></TableCell>
                            <TableCell align="center">{item.title}</TableCell>
                            <TableCell align="center">{item.price} x1 </TableCell>

                            <TableCell align="center" className={st.inputBlock}>
                                <Button variant="contained" color="secondary"
                                        disabled={!item.quantityToBuy}
                                        onClick={() => {
                                            setNewQuantity(item.id, item.quantityToBuy - 1)
                                        }}>
                                    -
                                </Button>
                                <TextField id="outlined-basic" variant="outlined"
                                           value={item.quantityToBuy}
                                           onChange={(e) => {
                                               setNewQuantity(item.id, +e.currentTarget.value)
                                           }}

                                />
                                <Button variant="contained" color="primary"
                                        onClick={() => {
                                            setNewQuantity(item.id, item.quantityToBuy + 1)
                                        }}

                                >
                                    +
                                </Button>
                            </TableCell>
                            <TableCell align="center">{item.price * item.quantityToBuy}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
