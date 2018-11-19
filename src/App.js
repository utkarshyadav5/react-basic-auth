import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBhBdzfB8NRJpfK88xwb6RviNUGs3spFTk',
            authDomain: 'auth-d6b79.firebaseapp.com',
            databaseURL: 'https://auth-d6b79.firebaseio.com',
            projectId: 'auth-d6b79',
            storageBucket: 'auth-d6b79.appspot.com',
            messagingSenderId: '161143592102'
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
