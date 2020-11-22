import { all, fork, put, call, delay, takeLatest, select} from 'redux-saga/effects';
import { AUTHENTICATION, REQUEST } from '../constants/constants';
import {requestData, requestDataError, requestDataSuccess, requestLogInError, logInSuccess, showErrorMessage, clearErrorMessage} from '../redux/actions';
import { getRequest, simulateNetworkRequest } from '../api/getRequest';

const getDeparturesData = state => state.departures;

function* requestWorker() {
  let request = yield select(getDeparturesData);
  try {
    yield put(requestData())
    const response = yield call(() => getRequest(request));
    const payload = prepareData(response);
    yield put(requestDataSuccess(payload))
  } catch (e) {
    yield put(requestDataError())
    yield put(showErrorMessage('Что-то пошло не так'))
    yield delay(5000)
    yield put(clearErrorMessage())
  }
}

function* requestWatcher() {
  yield takeLatest(REQUEST.UPDATE_DATE, requestWorker)
}

function* authenticationWorker(){
  try {
    yield call(() => simulateNetworkRequest())
    yield put(logInSuccess())
  } catch (e) {
    yield put(requestLogInError())
    yield put(showErrorMessage('Что-то пошло не так'))
    yield delay(5000)
    yield put(clearErrorMessage())
  }
}

function* authenticationWatcher() {
  yield takeLatest(AUTHENTICATION.LOGIN_REQUEST, authenticationWorker)
}

export function* rootSaga() {
  yield all ([
    fork(requestWatcher),
    fork(authenticationWatcher),
  ])
}

const prepareData = (response) => {
  return new Array(20).fill({...response, isFavoritedUser: false});
}