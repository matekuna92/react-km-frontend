import { 
        GET_DEVICES_PENDING, 
        GET_DEVICES_SUCCESS, 
        GET_DEVICES_FAIL,
        POST_DEVICE_SUCCESS, 
        POST_DEVICE_FAIL, 
        POST_DEVICE_PENDING,
        GET_DEVICE_PENDING, 
        GET_DEVICE_SUCCESS, 
        GET_DEVICE_FAIL,
        GET_DEVICE
        } from '../actions/actionTypes';

import { START_LOADING, STOP_LOADING } from '../actions/loaderActions';

/*
const initialState = {
    expense: {},
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
}
    */

// 10/1 előadás
export default function rootReducer(state = {}, action)
{
    return {
        devices: devicesReducer(state.devices, action),
        device: deviceReducer(state.device, action),
        isPending: isPendingReducer(state.isPending, action)
    }
}

function devicesReducer(state = [], action)
{
    switch(action.type)
    {
        case GET_DEVICES_PENDING: return [];
        case GET_DEVICES_FAIL: return [];
        case GET_DEVICES_SUCCESS: return action.value;

        // POST_EXPENSE case 
        case POST_DEVICE_SUCCESS: return [...state, action.value];
        default: return state;
    }
}

function deviceReducer(state = {}, action)
{
    switch(action.type)
    {
       /// case GET_DEVICE_PENDING: return {};
      ///  case GET_DEVICE_FAIL: return {};
      ///  case GET_DEVICE_SUCCESS: return action.device;
        case GET_DEVICE: return action.value;
        default: return state;
    }
}

function isPendingReducer(state = false, action)
{
    switch(action.type)
    {
        case START_LOADING: return true;
        case STOP_LOADING: return false;
       // case GET_DEVICES_PENDING: return true;
      //  case GET_DEVICE_PENDING: return true;       // csak pending állapot esetén szeretnénk loader-t látni
        
        // POST_EXPENSE_PENDING
      //  case POST_DEVICE_PENDING: return true;
        
        default: return state;           
    }
}

// export default deviceReducer;

/*
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
            isPending: false,
            error: action.error
        }

        case POST_DEVICE_SUCCESS: return {
            ...state,

            devices: [...state.devices, action.value]
        }

        case POST_DEVICE_PENDING:
        case POST_DEVICE_FAIL: 
        default:
        {
            return state;
        }
    }

    /*
        case ADD_DEVICE: return {
            ...state,
            devices: [...state.devices, 
                Object.assign(action.value, { id: state.devices[state.devices.length -1].id + 1 })]
        }           /* Mivel az app.js-ben a function(device) paramétert kapott, így ott a tömbben a device-t adtuk át az Object.assign-nak -->
                     reducer esetén viszont már action-t kap paraméterként, így az átadott objektum az action.value lesz ! 
        default: return state; 
    } 
}

export default deviceReducer;
*/