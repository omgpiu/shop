export type ItemType = {
    id: number,
    img: string,
    title: string,
    price: number
    quantityToBuy: number
    amountOfItem: number
}
export type CartReducerType = {
    items: ItemType[]
}
