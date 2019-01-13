export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_DEVICE = 'ADD_DEVICE';

// action creator függvények 

export function increment(value)
{
    return { type: INCREMENT, value };
}

export function decrement(value)
{
    return { type: DECREMENT, value };
}

export function addDevice(device)
{
    return { type: ADD_DEVICE, value: device };
}