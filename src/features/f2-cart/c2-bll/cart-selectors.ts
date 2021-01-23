import {AppRootStateType} from '../../../main/m2-bll/store';
import {ItemType} from '../../../main/m4-common/types/Types';

export const getCartItems = (state: AppRootStateType): ItemType[] => {
    return state.cart.items
};
export const getQuantity = (state: AppRootStateType, id: number): number => {
    const itemId = state.cart.items.filter(el => el.id === id);
    return itemId[0].quantityToBuy

};
