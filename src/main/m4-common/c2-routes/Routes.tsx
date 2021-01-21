import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from "../../../features/f1-login/l1-ui/Login";
import {Cart} from "../../../features/f2-cart/c1-ui/Cart";
import {ShopPage} from "../../../features/f3-shop-page/sp1-ui/ShopPage";


export const SIGN_IN_PATH = '/login';
export const CART_PATH = '/cart';
export const DOCUMENTS_PATH = '/documents';
export const SHOP_PAGE_PATH = '/shop';
export const PAGE_NOT_FOUND_PATH = '/404';

type PropsType = {}
export const Routes: React.FC<PropsType> = (props) => {

    return <>
        <Switch>
            <Route path={SIGN_IN_PATH} render={() => <Login/>}/>
            <Route exact path='/'
                   render={() => <Redirect to={SHOP_PAGE_PATH}/>}/>
            <Route path={CART_PATH} render={() => <Cart/>}/>
            <Route path={SHOP_PAGE_PATH} render={() => <ShopPage/>}/>
            {/*<Redirect from={'*'} to={PAGE_NOT_FOUND_PATH}/>*/}
        </Switch>

    </>;
};
