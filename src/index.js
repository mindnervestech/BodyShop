import React from 'react';
import App from './js/components/App';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//redux
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { PersistGate } from 'redux-persist/integration/react'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import Spinner2 from './js/components/Spinner/Spinner2';

import { store } from './js/redux/store/store'

let persistor = persistStore(store);

const app = (
    <Provider store={store}>
        <PersistGate loading={<Spinner2 />} persistor={persistor}>
            <App  />
        </PersistGate>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();