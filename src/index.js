import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import modeSwitchReducer from './reducers/modeSwitchReducer';
import shapeSwitchReducer from './reducers/shapeSwitchReducer';
import drawReducer from './reducers/drawReducer';



const allReduceres = combineReducers({
    shapeSwitch: shapeSwitchReducer,
    modeSwitch: modeSwitchReducer,
    draw: drawReducer
})

const store = createStore(allReduceres);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
