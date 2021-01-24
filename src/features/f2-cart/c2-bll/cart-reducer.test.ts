import com from '../../../main/m4-common/photo/Sensor_Foto_2105.jpg';
import {CartReducerType} from '../../../main/m4-common/types/Types';
import {addNewItem, cartReducer, setQuantity} from './cart-reducer';

let startState: CartReducerType;

beforeEach(() => {
    startState = {
        items: [
            {
                id: '16',
                img: com,
                title: 'Pressure',
                price: 100,
                amountOfItem: 1,
                quantityToBuy: 1
            },
            {
                id: '17',
                img: com,
                title: 'Pressure',
                price: 100,
                amountOfItem: 1,
                quantityToBuy: 1
            }
        ],
        totalPrice: 0
    };

});

test('Add new item in CartList', () => {
    const action = addNewItem({
        newItem: {
            id: '18',
            img: com,
            title: 'sensor',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        }
    });
    const newState = cartReducer(startState, action);
    expect(newState.items.length).toBe(3);
    expect(newState.items[2].title).toBe('sensor');
    expect(newState.items[2].quantityToBuy).toBe(1);
});
test('change quantity to buy', () => {
    const action = setQuantity({
        id: '16',
        quantityToBuy: 10,
    });
    const newState = cartReducer(startState, action);
    expect(newState.items.length).toBe(2);
    expect(newState.items[0].quantityToBuy).toBe(10);
    expect(newState.items[0].quantityToBuy).not.toBe(1);
    expect(newState.items[0].id).not.toBe('1');
    expect(newState.items[0].id).toBe('16');
});
test('Add the same item in CartList', () => {
    const action = addNewItem({
        newItem: {
            id: '17',
            img: com,
            title: 'sensor',
            price: 100,
            quantityToBuy: 1,
            amountOfItem: 1,
        }
    });
    const newState = cartReducer(startState, action);
    expect(newState.items.length).toBe(2);
    expect(newState.items[1].quantityToBuy).toBe(2);
});
//TODO test refactor

// test('Change total Price', () => {
//     const action = addNewItem({
//         newItem: {
//             id: '19',
//             img: com,
//             title: 'sensor',
//             price: 100,
//             quantityToBuy: 1,
//             amountOfItem: 1,
//         }
//     });
//     const newState = cartReducer(startState, action);
//     expect(newState.items.length).toBe(3);
//     expect(newState.totalPrice).toBe(300);
// });


export default 1;
