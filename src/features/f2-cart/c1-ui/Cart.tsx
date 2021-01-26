import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Checkbox, TextField} from '@material-ui/core';
import {getCartItems, getTotalPrice} from '../c2-bll/cart-selectors';
import {setQuantity, setTotalPrice} from '../c2-bll/cart-reducer';
import st from './cart.module.css';
import {Order} from '../../f5-order/o1-ui/Order';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: '74%',
        minWidth:'650px'
    }
    // table: {
    //     minWidth: 650,
    // },
});


export const Cart: React.FC = () => {
    const classes = useStyles();


    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);


    // change amount of items to buy
    const setNewQuantity = (id: string, quantityToBuy: number) => {
        dispatch(setQuantity({id, quantityToBuy}));
    };

    //TODO upgrade performance
    console.log('render');


    useEffect(() => {
        dispatch(setTotalPrice());
    }, [cartItems]);

    return (
        <div className={st.cart_wrapper}>
            <Order/>
            <TableContainer component={Paper} className={classes.root}>
                <Table>
                    <caption>Total Price: {totalPrice}</caption>
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
                                                setNewQuantity(item.id, item.quantityToBuy - 1);
                                            }}
                                    >
                                        -
                                    </Button>
                                    <TextField id="outlined-basic" variant="outlined"
                                               value={item.quantityToBuy}
                                               onChange={(e) => {
                                                   setNewQuantity(item.id, +e.currentTarget.value);
                                               }}

                                    />
                                    <Button variant="contained" color="primary"
                                            onClick={() => {
                                                setNewQuantity(item.id, item.quantityToBuy + 1);
                                            }}
                                    >
                                        +
                                    </Button>
                                </TableCell>
                                <TableCell align="center">{item.price * item.quantityToBuy} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
};
