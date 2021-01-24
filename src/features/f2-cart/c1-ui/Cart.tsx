import React from 'react';
import {CartTable} from '../../../test/test';
import {useSelector} from 'react-redux';
import {getCartItems} from '../c2-bll/cart-selectors';

export const Cart = () => {


    return (
        <div>
            <CartTable />

        </div>
    )
}


