import { REQUEST, MAIN, IMAGES } from '../constants/constants';

const initialState = {
    outboundpartialDate: '',
    favoriteCount: 0,
    originPlace: 'SVO',
    destinationPlace: 'JFK',
    departures: [],
    locationsPictures: [{id: 1, src: IMAGES.IMAGE1}, {id: 2, src: IMAGES.IMAGE2}, {id: 3, src: IMAGES.IMAGE3}, {id: 4, src: IMAGES.IMAGE4}],
    errorMessage: '',
    isLoading: false
};

export const departuresReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST.UPDATE_DATE:
          return {...state, outboundpartialDate: action.payload}
  
        case REQUEST.REQUEST_DATA:
          return {...state, isLoading: true, departures: []}
  
        case REQUEST.REQUEST_DATA_SUCCEEDED:
          return {...state, isLoading: false, departures: action.payload}
  
        case REQUEST.INCREMENT_FAVORITE_COUNT:
          return {...state, favoriteCount: state.favoriteCount+=1 }

        case REQUEST.DECRIMENT_FAVORITE_COUNT:
          return {...state, favoriteCount: state.favoriteCount-=1 }

        case REQUEST.REQUEST_DATA_FAILED:
          return {...state, isLoggedIn: false}

        case MAIN.ADD_ERROR_MESSAGE:
          return {...state, errorMessage: action.payload }
    
        case MAIN.CLEAR_ERROR_MESSAGE:
          return {...state, errorMessage: '' }
  
        default: return state
    }
};