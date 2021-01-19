import React from 'react';
import Header from '../m4-common/c1-header/Header';
import {ShopPage} from '../../features/f3-shop-page/sp1-ui/ShopPage';
import {Cart} from '../../features/f2-cart/c1-ui/Cart';
import comImg from '../m4-common/c2-assets/a1-img/com.jpg';


function App() {
    return (
        <>

            <Header/>
            <ShopPage/>
            <Cart/>

        </>
    );
}

export default App;
