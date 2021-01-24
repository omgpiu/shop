export type ItemType = {
    id: string,
    img: string,
    title: string,
    price: number
    quantityToBuy: number
    amountOfItem: number
}
export type CartReducerType = {
    items: ItemType[]
    totalPrice: number
}
