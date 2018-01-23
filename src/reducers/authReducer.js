import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

//INITIAL STATE

const initialState = {
    firstName: '',
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

//ACTION TYPES
// const FIRST_NAME_CHANGED = 'FIRST_NAME_CHANGED';
// const LAST_NAME_CHANGED = 'LAST_NAME_CHANGED';
// const EMAIL_CHANGED = 'EMAIL_CHANGED';
// const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
const AUTH_FORM_UPDATE = 'AUTH_FORM_UPDATE'
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
const LOGIN_USER_START = 'LOGIN_USER_START';
const SIGN_UP_USER_START = 'SIGN_UP_USER_START';
const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS';
const SIGN_UP_USER_FAIL = 'SIGN_UP_USER_FAIL';

//ACTION CREATORS

export const authFormUpdate = ({ prop, value }) => {
    const action = { type: AUTH_FORM_UPDATE, payload: { prop, value } };
    return action;
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        user
    })
}

const loginUserFail = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        user
    })
}

//THUNKS

export const loginUserThunk = ({ email, password }) => async dispatch => {
    dispatch({ type: LOGIN_USER_START })
    try {
        let user = await firebase.auth().signInWithEmailAndPassword(email, password)
        // console.log(user)
        let userToken = user.uid
        await AsyncStorage.setItem('user-token', userToken);
        // console.log('tokennnnnnnn', userToken)
        loginUserSuccess(dispatch, user)
    } catch (user) {
        loginUserFail(dispatch, user)
    }
}



//REDUCER

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_FORM_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...initialState,
                user: action.user,
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication failed',
                password: '',
                loading: false
            }
        default:
            return state;
    }
}