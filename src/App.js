import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { Auth, Main } from './Router';
import store from './store';




export default class App extends Component {

    componentDidMount() {
        var config = {
            apiKey: "AIzaSyDMEC5CY_b4FJF1sGyGkkxmqbYPDOLs5RU",
            authDomain: "myso-b2972.firebaseapp.com",
            databaseURL: "https://myso-b2972.firebaseio.com",
            projectId: "myso-b2972",
            storageBucket: "myso-b2972.appspot.com",
            messagingSenderId: "701270026227"
        };
        firebase.initializeApp(config);
    }

    renderAuth() {
        const user = firebase.auth().currentUser 
        if (user) return <Main />
        else return <Auth />
    }

    render () {
        return (
            <Provider store={store}>
                {/* {this.renderAuth()} */}
                <Auth />
            </Provider>
        )
    }
}