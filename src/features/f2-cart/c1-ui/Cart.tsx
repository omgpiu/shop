import React from 'react';
import {useSelector} from 'react-redux';
import {getCartItems} from '../c2-bll/cart-selectors';
import {CartList} from './CartContainer';

export const Cart = () => {
    const cartItems = useSelector(getCartItems)
    return (
        <div>
            {
                cartItems[0] && cartItems.map(item => {
                    return (
                        <CartList key={item.id} item={item}/>
                    )
                })
            }
        </div>
    )
}


