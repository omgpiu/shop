import {AppRootStateType} from '../../../main/m2-bll/store';
import {ItemType} from '../../../main/m4-common/types/Types';
import {useSelector} from 'react-redux';



export const getCartItems = (state: AppRootStateType): ItemType[] => {
    return state.cart.items
};
// export const getQuantity = (id: string):number=> {
//     const quantity = useSelector<AppRootStateType,ItemType[]>(state=>state.cart.items)
//     const itemId = quantity.filter(el => el.id === id);
//     return itemId[0].quantityToBuy
// };
