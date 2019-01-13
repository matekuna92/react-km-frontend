import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { INCREMENT, DECREMENT, ADD_DEVICE, increment, decrement } from './actions/actionTypes';

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

const store = createStore(countReducer);

store.subscribe( () => console.log('count:', store.getState()));

store.dispatch(increment(5));
store.dispatch(decrement(2));
store.dispatch(increment(10));


//store.dispatch({ type: INCREMENT, value: 5 });
//store.dispatch({ type: DECREMENT, value: 2 });
//store.dispatch({ type: INCREMENT, value: 10 });

export default store;

