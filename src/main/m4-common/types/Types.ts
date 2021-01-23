export type ItemType = {
    id: number,
    img: string,
    title: string,
    price: number
}
export type CartReducerType = {
    items: ItemType[]
}
