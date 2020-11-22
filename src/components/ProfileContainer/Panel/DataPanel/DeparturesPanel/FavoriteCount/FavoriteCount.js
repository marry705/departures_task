import React from 'react';
import { useSelector } from 'react-redux';

import './FavoriteCount.css'

const FavoriteCount = () => {
    const { departures, favoriteCount } = useSelector(state => state.departures);
  
    return (
        departures.length !== 0 ? <p className='favorite-count'>Добавлено в Избранное: <b className='blue-text'>{ favoriteCount }</b> рейстов</p> : null
    );
  };
  
  export default FavoriteCount;