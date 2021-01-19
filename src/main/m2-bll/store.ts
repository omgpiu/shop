import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appReducer} from './app-reducer';
import {authReducer} from '../../features/f1-login/l2-bll/auth-reducer';
import {cartReducer} from '../../features/f2-cart/c2-bll/cart-reducer';
import thunkMiddleware from 'redux-thunk';
import {shopPageReducer} from '../../features/f3-shop-page/sp2-bll/shop-page-reducer';


const rootReducer = combineReducers({
    cart: cartReducer,
    app: appReducer,
    auth: authReducer,
    shopPage: shopPageReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});

export type AppRootStateType = ReturnType<typeof rootReducer>
