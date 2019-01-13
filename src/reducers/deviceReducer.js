import { ADD_DEVICE } from '../actions/actionTypes';

const deviceReducer = (state = { expenses: [] }, action ) => { 
    switch(action.type)
    {
        case ADD_DEVICE: return {
            ...state,
            devices: [...state.devices, 
                Object.assign(action.value, { id: this.state.devices[this.state.devices.length -1].id + 1 })]
        }           /* Mivel az app.js-ben a function(device) paramétert kapott, így ott a tömbben a device-t adtuk át az Object.assign-nak -->
                     reducer esetén viszont már action-t kap paraméterként, így az átadott objektum az action.value lesz ! */
        default: return state; 
    }
}

export default deviceReducer;