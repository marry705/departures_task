import {AUTHENTICATION, REQUEST, MAIN} from '../constants/constants'

export const updateEmail = (email) => {
  return {
    type: AUTHENTICATION.UPDATE_EMAIL,
    payload: email
  }
}

export const updatePassword = (password) => {
  return {
    type: AUTHENTICATION.UPDATE_PASSWORD,
    payload: password,
  }
}

export const requestLogIn = () => {
  return {
    type: AUTHENTICATION.LOGIN_REQUEST,
  }
}

export const requestLogInError = () => {
  return {
    type: AUTHENTICATION.LOGIN_FAILED,
  }
}

export const logInSuccess = () => {
  return {
    type: AUTHENTICATION.LOGIN_SUCCESS,
  }
}

export const logOut = () => {
  return {
    type: AUTHENTICATION.LOGOUT,
  }
}

export const showErrorMessage = (data) => {
  return {
    type: MAIN.ADD_ERROR_MESSAGE,
    payload: data
  }
}

export const clearErrorMessage = () => {
  return {
    type: MAIN.CLEAR_ERROR_MESSAGE
  }
}
//
export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
}; 

export const clearLocalStorage = () => {
  window.localStorage.clear();
};
//
export const updateDate = (date) => {
  return {
    type: REQUEST.UPDATE_DATE,
    payload: date,
  }
}

export const requestData = () => {
  return {
    type: REQUEST.REQUEST_DATA
  }
}

export const requestDataSuccess = (data) => {
  return {
    type: REQUEST.REQUEST_DATA_SUCCEEDED,
    payload: data,
  }
}

export const requestDataError = () => {
  return {
    type: REQUEST.REQUEST_DATA_FAILED
  }
}

export const decrimentFavoriteCount = (data) => {
  return {
    type: REQUEST.DECRIMENT_FAVORITE_COUNT,
    payload: data
  }
}

export const incrementFavoriteCount = (data) => {
  return {
    type: REQUEST.INCREMENT_FAVORITE_COUNT,
    payload: data
  }
}