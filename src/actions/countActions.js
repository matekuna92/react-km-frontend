
import { INCREMENT, DECREMENT } from './actionTypes';

// action creator függvények 

export function incrementAsync(value, timeoutInMS = 1000)
{
    return function(dispatch, getState)                    // https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
    {
        setTimeout( () => {
            dispatch({ type: INCREMENT, value })
        }, timeoutInMS)
    }

   // return { type: INCREMENT, value };
}

export function decrementAsync(value, timeoutInMS = 1000)
{
    return function(dispatch, getState)
    {
        setTimeout( () => {
            dispatch({ type: INCREMENT, value})
        }, timeoutInMS)
    }

   // return { type: DECREMENT, value };
}