import { ADD_DEVICE } from '../actions/actionTypes';

const initialState = {
    devices: [
        { id: 1, name: 'LG', amount: 2 },
        { id: 2, name: 'Samsung', amount: 5 },
        { id: 3, name: 'Sony', amount: 15 },
        { id: 4, name: 'Huawei', amount: 3 },
        { id: 5, name: 'SilverCrest', amount: 22 },
        { id: 6, name: 'Motorola', amount: 8 },
        { id: 7, name: 'NoName', amount: 11 },
        { id: 8, name: 'Apple', amount: 6 }
    ]
}

const deviceReducer = (state = initialState, action ) => { 
    switch(action.type)
    {
        case ADD_DEVICE: return {
            ...state,
            devices: [...state.devices, 
                Object.assign(action.value, { id: state.devices[state.devices.length -1].id + 1 })]
        }           /* Mivel az app.js-ben a function(device) paramétert kapott, így ott a tömbben a device-t adtuk át az Object.assign-nak -->
                     reducer esetén viszont már action-t kap paraméterként, így az átadott objektum az action.value lesz ! */
        default: return state; 
    }
}

export default deviceReducer;