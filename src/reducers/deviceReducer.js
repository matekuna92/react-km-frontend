import { ADD_DEVICE, GET_DEVICES_PENDING, GET_DEVICES_SUCCESS, GET_DEVICES_FAIL } from '../actions/actionTypes';

const initialState = {
   
    devices: [],
    isPending: false,
    error: null

    /*
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
    */
}

const deviceReducer = (state = initialState, action ) => { 
    switch(action.type)
    {
        case GET_DEVICES_PENDING: return {
            ...state,

            devices: [],
            isPending: true,
            error: null
        }

        case GET_DEVICES_SUCCESS: return {
            ...state,

            devices: action.value,
            isPending: false
        }

        case GET_DEVICES_FAIL: return {
            ...state,
            isPending: false,        // devices [] array ürítése nem szükséges, a PENDING már üríti
            error: action.error
        }


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