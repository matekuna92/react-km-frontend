import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/devicesPage';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    
    <BrowserRouter>

        <Provider store={ store }>
            <App />
        </Provider>

    </BrowserRouter>,
    document.getElementById('root')
)

/* Idő frissítése másodpercenként a kezdőoldalon - teszt kód */

/*

function renderTime()
{
    const element = (<div>
        { new Date().toLocaleString() }

    </div>)

    ReactDOM.render(element, document.getElementById('root'));
}

setInterval( () => renderTime(), 1000); 

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
