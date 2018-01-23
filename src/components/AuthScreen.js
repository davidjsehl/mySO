import React from 'react';
import LoginForm from './LoginForm';


const AuthScreen = ({ navigation }) => {
    return (
        <LoginForm navigation={navigation} />
    )
}

export default AuthScreen;