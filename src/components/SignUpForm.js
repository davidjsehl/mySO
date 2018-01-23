import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { authFormUpdate } from '../reducers/authReducer';


export class SignUpForm extends Component {

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUserThunk({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: '#4D5966' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if (this.props.loading) return <Spinner size='large' />
        else {
            return (
                <TouchableOpacity style={styles.buttonContainer} 
                // onPress={this.onButtonPress.bind(this)}
                >
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            )
        }
    }

    render() {
        console.log(this.props)
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.screenContainer}>

                <View style={styles.loginContainer}>
                    <Image style={styles.logo} source={require('../../public/logo.png')} />

                </View>
                <View style={styles.formContainer}>
                    <View style={styles.container}>
                        <StatusBar barStyle="light-content" />
                        <TextInput style={styles.input}
                            autoCorrect={false}
                            returnKeyType="next"
                            placeholder='First Name'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            value={this.props.firstName}
                            onChangeText={(text) => this.props.authFormUpdate({ prop: 'firstName', value: text })}
                            />
                        <TextInput style={styles.input}
                            autoCorrect={false}
                            returnKeyType="next"
                            placeholder='Last Name'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            value={this.props.lastName}
                            onChangeText={(text) => this.props.authFormUpdate({ prop: 'lastName', value: text })}
                            />
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='Email'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            value={this.props.email}
                            onChangeText={(text) => this.props.authFormUpdate({ prop: 'email', value: text })}
                            />

                        <TextInput style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            value={this.props.password}
                            onChangeText={(text) => this.props.authFormUpdate({ prop: 'password', value: text })}
                            secureTextEntry />
                        {this.renderError()}
                        {this.renderButton()}
                    </View>
                </View>


            </KeyboardAvoidingView>
        );
    }
}

const styles = {
    screenContainer: {
        flex: 1,
        backgroundColor: '#4D5966',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 300
    },
    title: {
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    },
    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

const mapStateToProps = ({ auth }) => {
    const { firstName, lastName, email, password, error, loading } = auth;
    return {
        firstName,
        lastName,
        email,
        password,
        error,
        loading
    }
}

const SignUpFormContainer = connect(mapStateToProps, { authFormUpdate })(SignUpForm);
export default SignUpFormContainer;