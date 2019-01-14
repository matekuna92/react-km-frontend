import { GET_DEVICES_PENDING, GET_DEVICES_SUCCESS, GET_DEVICES_FAIL } from './actionTypes';
import { getDevices as getDevicesApi } from '../api/index';

function getDevices()
{
    return function(dispatch)                    // https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
    {
        dispatch({
            type: GET_DEVICES_PENDING, 
            value: []
        })

        getDevicesApi()
        .then(response => {
           dispatch({
            type: GET_DEVICES_SUCCESS,
               value: response.data
           })
        })
        .catch(error => {
            dispatch({
                type: GET_DEVICES_FAIL,
                error
            })
        })

    }

   // return { type: INCREMENT, value };
}

export {
    getDevices
}