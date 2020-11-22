import React from 'react';
import { useSelector } from 'react-redux';
import Departure from './Departure';

import './DepartureList.css'

const DeparturesList = () => {
    const { departures } = useSelector(state => state.departures);

    const listItems = departures.map((departure, index) =>
       <Departure value={departure} key={index.toString()}/>
    );

    return (
        <div className='departure-container'>
            {listItems}
        </div>
    );
  };
  
  export default DeparturesList;