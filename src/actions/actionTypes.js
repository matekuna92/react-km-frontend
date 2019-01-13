export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// action creator függvények 

export function increment(value)
{
    return { type: INCREMENT, value };
}

export function decrement(value)
{
    return { type: DECREMENT, value };
}