import IMAGE1 from '../assets/images/slide1.jpg';
import IMAGE2 from '../assets/images/slide2.jpg';
import IMAGE3 from '../assets/images/slide3.jpg';
import IMAGE4 from '../assets/images/slide4.jpg';

const AUTHENTICATION = {
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT',
};

const MAIN = {
    ADD_ERROR_MESSAGE: 'ADD_ERROR_MESSAGE',
    CLEAR_ERROR_MESSAGE: 'CLEAR_ERROR_MESSAGE'
};

const REQUEST = {
    UPDATE_DATE: 'UPDATE_DATE',
    REQUEST_DATA: 'REQUEST_DATA',
    REQUEST_DATA_SUCCEEDED: 'REQUEST_DATA_SUCCEEDED',
    REQUEST_DATA_FAILED: 'REQUEST_DATA_FAILED',
    DECRIMENT_FAVORITE_COUNT: 'DECRIMENT_FAVORITE_COUNT',
    INCREMENT_FAVORITE_COUNT: 'INCREMENT_FAVORITE_COUNT'
};

const CONST = {
    SERVER_HOST: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/en-EN',
    API_KEY: 'ac45bb49a0mshca48265691cce65p125ba2jsn25a988169c83',
    API_HOST: 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
};

const IMAGES = {
    IMAGE1: IMAGE1,
    IMAGE2: IMAGE2,
    IMAGE3: IMAGE3,
    IMAGE4: IMAGE4
};
  
export { AUTHENTICATION, REQUEST, MAIN, CONST, IMAGES };