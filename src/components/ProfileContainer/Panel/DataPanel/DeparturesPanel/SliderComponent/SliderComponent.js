import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css'

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    centerMode: true,
};

const SliderComponent = () => {
    const { locationsPictures } = useSelector((state) => state.departures);

    const listItems = locationsPictures.map((picture) => ( 
        <img key={picture.id} src={picture.src} alt='slide'/>
    ));

    return (
      <div className='slider-container'>
        <Slider {...settings}>
            {listItems}
        </Slider>
      </div>
    );
};
  
export default SliderComponent;