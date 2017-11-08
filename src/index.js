import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';

import reducers from './reducers';

import './index.css';
import App from './containers/App';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk, ReduxPromise)));

var config = {
    apiKey: "AIzaSyDKwcofJqJodVbnOLZ5ONF_4sYBHepIkVE",
    authDomain: "react-dojo-demo.firebaseapp.com",
    databaseURL: "https://react-dojo-demo.firebaseio.com",
    projectId: "react-dojo-demo",
    storageBucket: "react-dojo-demo.appspot.com",
    messagingSenderId: "892805662679"
};
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
