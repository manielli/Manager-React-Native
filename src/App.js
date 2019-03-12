import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { constants } from './constants';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: constants.apiKey,
            authDomain: constants.authDomain,
            databaseURL: constants.databaseURL,
            storageBucket: constants.storageBucket,
            messagingSenderId: constants.messagingSenderId
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

export default App;
