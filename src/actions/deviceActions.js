import { 
        GET_DEVICES_PENDING, 
        GET_DEVICES_SUCCESS, 
        GET_DEVICES_FAIL, 
        POST_DEVICE_PENDING, 
        POST_DEVICE_SUCCESS, 
        POST_DEVICE_FAIL, 
        GET_DEVICE 
        } from './actionTypes';
import { 
        getDevices as getDevicesApi, 
        addDevice as addDeviceApi,
        getDevice as getDeviceApi
        } from '../api/index';

function getDevices()
{
    return function(dispatch)                    // https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
    {
       return getDevicesApi()
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

// POST állapotok kezelése

//const addDevice = (device) => (dispatch) => {
    function addDevice(device)
    {   
        /*return function(dispatch)
        {
            return addDeviceApi(device)
            .then((response) => {
                dispatch({
                    type: POST_DEVICE_PENDING,
                    value: []
                });
            })
        }*/

        return function(dispatch)
        {
            return addDeviceApi(device)
            .then((response) => {
                dispatch({    
                    type: POST_DEVICE_SUCCESS,
                    value: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: POST_DEVICE_FAIL,
                    error
                })
            })
        }
    }

function getDevice(id)
{
    return async function(dispatch)
    {
       // const device = { name: 'Car', amount: 10 };
       //   getDeviceApi(id).then(device => dispatch({ value: device, type: GET_DEVICE })); ugyanaz a kód lenne, mint await-tel
        const device = await getDeviceApi(id);
        dispatch({ value: device, type: GET_DEVICE });
    }
}


export {
    getDevices,
    addDevice,
    getDevice
}