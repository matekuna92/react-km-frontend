import { INCREMENT, DECREMENT } from '../actions/actionTypes';

const countReducer = ( (state=0, action) => {
    if(action.type === INCREMENT)
    {
        return state + action.value;
    }

    if(action.type === DECREMENT)
    {
        return state - action.value;
    }

    return state;   // alapértelmezett return
})

export default countReducer;