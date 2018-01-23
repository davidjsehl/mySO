import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import AuthScreen from './components/AuthScreen';
import { SignUpForm } from './components/SignUpForm';
import EventListScreen from './components/EventListScreen';
import ProfileScreen from './components/ProfileScreen';

export const Auth = StackNavigator({
    AuthScreen: {
        screen: AuthScreen,
        navigationOptions: {
            title: 'Sign In'
        }
    },
    SignUpForm: {
        screen: SignUpForm,
        navigationOptions: {
            title: 'Sign Up'
        }
    }
})

export const Main = TabNavigator({
    EventList: {
        screen: EventListScreen,
        navigationOptions: {
            tabBarLabel: 'Events',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        }
    }
})