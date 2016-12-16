import 'babel-polyfill';

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'; // eslint-disable-line no-unused-vars

import { App } from './app';
import { reducer } from './reducer';

import data from './data/personal_stackoverflow_usage';

const initialState = {
    data: {
        chart1data: [ 4, 8, 12, 16, 20, 24 ]
    }
}

export const store = createStore(reducer, initialState, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}

render();
