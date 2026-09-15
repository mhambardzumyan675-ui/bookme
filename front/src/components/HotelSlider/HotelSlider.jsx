import React from 'react'
import { useState } from 'react'
import HotelCard from '../../components/HotelCard/HotelCard';
import hotels from "../../data/hotels"
import './HotelSlider.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HotelSlider = () => {

const [currentIndex, setCurrentIndex] = useState(0);

const nextSlide = () => {
    if (currentIndex < hotels.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <>
       <section className='hotels'>
        <div className="container">
            
          <div className='hotels-title'>
            <h1 className='hotels-main-title'>Hotels in your area</h1>
          </div>
          <div className="hotels-content">
          <div className="cardslide">
          <button className='prevhotelslider' onClick={prevSlide}>
            <FontAwesomeIcon  className='previoushotel' icon={faChevronLeft} />
          </button>
        </div>
        <div className="hotels-viewport">
         <div className="hotel-cards"  style={{ transform: `translateX(-${currentIndex * 270}px)`}}>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          images={hotel.images}
          name={hotel.name}
          rating={hotel.rating}
          bed={hotel.bed}
          square={hotel.square}
          price={hotel.price}
        />
      ))}
    </div>
    </div>
    <div className="cardslide">
    <button className='nexthotelslider' onClick={nextSlide}>
            <FontAwesomeIcon className='nexthotel' icon={faChevronRight} />
          </button>
          </div>
    </div>
    </div>
    <div className="get-hotels-bcg">
      <div className='container'>
        <div className="get-hotels-info">
      <div className="see-hotels">
        <h3 className='see-title'>See it all</h3>
        <p className='see-text'>From local hotels to global brands, discover millions of rooms all around the world.</p>
      </div>
      <div className="compare-hotels">
        <h3 className='compare-title'>Compare right here</h3>
        <p className='compare-text'>No need to search anywhere else. The biggest names in travel are right here.</p>
      </div>
       <div className="get-hotels">
        <h3 className='get-title'>Get exclusive rates</h3>
        <p className='get-text'>We've special deals with the world's leading hotels and we these savings with you.</p>
      </div>
    </div>
    </div>
    </div>
      </section>
    </>
  )
}

export default HotelSlider