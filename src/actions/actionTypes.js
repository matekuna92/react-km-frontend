export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_DEVICE = 'ADD_DEVICE';


export function addDevice(device)
{
    return { type: ADD_DEVICE, value: device };
}