import com from '../../../main/m4-common/photo/Sensor_Foto_2105.jpg';
import {CartReducerType} from '../../../main/m4-common/types/Types';
import {addNewItem, cartReducer} from './cart-reducer';

let startState: CartReducerType

beforeEach(() => {
    startState = {
        items: [
            {
                id: 16,
                img: com,
                title: 'Pressure',
                price: 100
            }
        ]
    }
})
test('Add new item in CartList', () => {
    const action = addNewItem({
        item: {
            id: 17,
            img: com,
            title: 'sensor',
            price: 100
        }
    })
    const newState = cartReducer(startState, action)
    expect(newState.items.length).toBe(2)
    expect(newState.items[1].title).toBe('sensor')
})


export default 1;