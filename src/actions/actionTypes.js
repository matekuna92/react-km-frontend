export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_DEVICE = 'ADD_DEVICE';

export const GET_DEVICES_PENDING = 'GET_DEVICES_PENDING';
export const GET_DEVICES_SUCCESS = 'GET_DEVICES_SUCCESS';
export const GET_DEVICES_FAIL = 'GET_DEVICES_FAIL';

export const POST_DEVICE_PENDING = 'POST_DEVICE_PENDING';
export const POST_DEVICE_SUCCESS = 'POST_DEVICE_SUCCESS';
export const POST_DEVICE_FAIL = 'POST_DEVICE_FAIL';

export function addDevice(device)
{
    return { type: ADD_DEVICE, value: device };
}

