import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import {
    createStore
} from 'redux'
import {
    Provider
} from 'react-redux'

const initialState = {
    newtask: '',
    list: []
}

const reducer = (state = initialState, actions) => {
    if (actions.type === 'INPUT_CHANGE')
        return { ...state, newtask: actions.payload }
    if (actions.type === 'ADD_TASK')
        return { ...state, list: [...state.list, state.newtask], newtask: '' }
    return state
}

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();