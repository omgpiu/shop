import {AppRootStateType} from '../../../main/m2-bll/store';
import {ItemType} from '../../../main/m4-common/types/Types';

export const getItems = (state: AppRootStateType): ItemType[] => {
    return state.shopPage.items;
};
export const getTotalItemsCount = (state: AppRootStateType): number => {
    return state.shopPage.totalItemsCount;

};
export const getPageSize = (state: AppRootStateType): number | undefined => {
    return state.shopPage.pageSize;
};
export const getCurrentPage = (state: AppRootStateType): number => {
    return state.shopPage.currentPage;
};