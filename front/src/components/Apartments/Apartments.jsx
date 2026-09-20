import React from 'react'
import './Apartments.scss'
import ApartmentsCard from '../ApartmentsCard/ApartmentsCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import apartments from '../../data/apartments';
import { useState } from 'react';

const Apartments = () => {

const [currentIndex, setCurrentIndex] = useState(0);
const nextSlide = () => {
    if (currentIndex < apartments.length - 1) { setCurrentIndex(currentIndex + 1);} };

const prevSlide = () => {if (currentIndex > 0) {setCurrentIndex(currentIndex - 1);}};

  return (
    <>
<section className='apartments'>
    <div className="container">
        <div className='apart-content'>
            <h2 className='apart-title'>Browse by property type</h2>
            <p className='apart-text'>you can easily browse and filter your search by property type. This feature allows you to select hotels or alternative options, such as hostels, vacation rentals, or bed and breakfasts, based on your preferences and specific needs for your stay.</p>
            <span className='apart-date'>2018-2024</span>
            </div>
        <div className="prv-slider-btn">
        <button className='prevhotelslider' onClick={prevSlide}>
            <FontAwesomeIcon className='prevhotel' icon={faChevronLeft} />
          </button>
          </div>
    <div className="apartment-cards"  style={{ transform: `translateX(-${currentIndex * 270}px)`}}>
    {apartments.map((apartment)=>(
        <ApartmentsCard 
        key={apartment.id}
        name={apartment.name}
        image={apartment.image}/>
    ))}
    </div>
    <div className='nxt-slider-btn'>
    <button className='nexthotelslider' onClick={nextSlide}>
            <FontAwesomeIcon className='nexthotel' icon={faChevronRight} />
          </button>
          </div>
    </div>
</section>
    </>
  )
}

export default Apartments