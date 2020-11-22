import React from 'react';
import SliderComponent from './SliderComponent/SliderComponent';
import DeparturesList from './DepartureList/DeparturesList';
import FavoriteCount from './FavoriteCount/FavoriteCount';

const DeparturesPanel = () => {
    return (
        <>
            <SliderComponent/>
            <FavoriteCount/>
            <DeparturesList/>
        </>
    );
  };
  
  export default DeparturesPanel;