import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Reducer from './reducer'
import App from './App'
import * as serviceWorker from './serviceWorker'

const store = createStore(Reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
