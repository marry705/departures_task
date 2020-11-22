import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrimentFavoriteCount, incrementFavoriteCount } from '../../../../../../redux/actions';

const Departure = ({ value }) => {
    const dispatch = useDispatch();
    const [isFavoritedUser, updateFavorited] = useState(value.isFavoritedUser);

    let quoteDate = new Date(value.Routes[0].QuoteDateTime).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric' });
    let quoteTime = new Date(value.Routes[0].QuoteDateTime).toLocaleTimeString('ru', {hour: '2-digit', minute:'2-digit'});

    const clickFavoriteButton = () => {
      if (isFavoritedUser) {
        dispatch(decrimentFavoriteCount());
      } else {
        dispatch(incrementFavoriteCount());
      }
      updateFavorited(!isFavoritedUser);
    }

    return (
      <>
        <div className='departure-row'>
          <div className='departure-icon'></div>
          <div className='departure-info'>
            <div className='places'>
              <p>{value.Places[1].CityName} ({value.Places[1].SkyscannerCode})</p><p>{value.Places[0].CityName} ({value.Places[0].SkyscannerCode})</p></div>
            <p>{quoteDate} - {quoteTime}</p>
            <p>{value.Carriers[0].Name}</p>
          </div>
          <div className='departure-currencies'>
            <button className={isFavoritedUser ? 'fan-button favorite' : 'fan-button'} onClick={() => clickFavoriteButton()}></button>
            <p><b className='small-text'>Price</b> {value.Routes[0].Price} {value.Currencies[0].Symbol}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Departure;