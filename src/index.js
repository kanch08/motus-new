import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware,compose} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/reducer/rootReducer';
import * as serviceWorker from './serviceWorker';
import {logger,validator} from './middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
     rootReducer,
     composeEnhancers(
     applyMiddleware(logger,validator)
     ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
