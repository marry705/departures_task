import { AUTHENTICATION, MAIN } from '../constants/constants';
import { getLocalStorage, setLocalStorage, clearLocalStorage } from './actions';

let email = getLocalStorage('email') ? getLocalStorage('email') : '';
let password = getLocalStorage('password') ? getLocalStorage('password') : '';
let isLoggedIn = email && password;

const initialState = {
    isLoggedIn: isLoggedIn,
    email: email,
    password: password,
    isLoading: false,
    errorMessage: ''
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTHENTICATION.UPDATE_PASSWORD:
        return {...state, password: action.payload}

      case AUTHENTICATION.UPDATE_EMAIL:
        return {...state, email: action.payload}

      case AUTHENTICATION.LOGIN_REQUEST:
        return {...state, isLoading: true}

      case AUTHENTICATION.LOGIN_SUCCESS:
        setLocalStorage('email', state.email);
        setLocalStorage('password', state.password);
        return {...state, isLoggedIn: true, isLoading: false}

      case AUTHENTICATION.LOGIN_FAILED:
        return {...state, isLoggedIn: false, isLoading: false}

      case MAIN.ADD_ERROR_MESSAGE:
        return {...state, errorMessage: action.payload }

      case MAIN.CLEAR_ERROR_MESSAGE:
        return {...state, errorMessage: '' }

      case AUTHENTICATION.LOGOUT:
        clearLocalStorage();
        return {...state, isLoggedIn: false, email: '', password: ''}

      default: return state
    }
};
