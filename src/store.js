import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { INCREMENT, DECREMENT, ADD_DEVICE, increment, decrement } from './actions/actionTypes';
import countReducer from './reducers/countReducer';
import deviceReducer from './reducers/deviceReducer';
import { reduxLogger } from './utils/reduxLogger';
import thunk from 'redux-thunk';

/* Kiszervezve 2 külön fájlba

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

*/

/*

const deviceReducer = (state = { expenses: [] }, action ) => { 
    switch(action.type)
    {
        case ADD_DEVICE: return {
            ...state,
            devices: [...state.devices, 
                Object.assign(action.value, { id: this.state.devices[this.state.devices.length -1].id + 1 })]
        }           /* Mivel az app.js-ben a function(device) paramétert kapott, így ott a tömbben a device-t adtuk át az Object.assign-nak -->
                     reducer esetén viszont már action-t kap paraméterként, így az átadott objektum az action.value lesz ! 
        default: return state;
    }
}

*/

const rootReducer = combineReducers({
    count: countReducer,
    device: deviceReducer
})

const middleware = [thunk, reduxLogger];

const composeEnhancers =
typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

/* EREDETI STORE: 
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/

/*
store.subscribe( () => console.log('count:', store.getState()));

store.dispatch(increment(5));
store.dispatch(decrement(2));
store.dispatch(increment(10));


//store.dispatch({ type: INCREMENT, value: 5 });
//store.dispatch({ type: DECREMENT, value: 2 });
//store.dispatch({ type: INCREMENT, value: 10 });

*/

export default store;

