import { combineReducers } from 'redux';
import {authenticationReducer} from './authenticationReducer';
import {departuresReducer} from './departuresReducer';

export const rootReducer = combineReducers({
    authentication: authenticationReducer,
    departures: departuresReducer
});

export default rootReducer;