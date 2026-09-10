import React from 'react'
import './Home.scss'
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import HotelCard from '../../components/HotelCard/HotelCard';
import hotels from "../../data/hotels";


const Home = () => {
  return (
    <>
    <div className='home-page-bcg'>
      <div className='container'>
      <header className='header'>
        <div className='page-logo'>
          <img className='logo-pic' src='./images/logo.png'></img>
        </div>
        <div className="header-menu">
        <nav className='header-navlist'>
            <ul className='navlist'>
                <li className='nav-item'><Link to='/list'>List your property</Link></li>
                <li className='nav-item'><Link to='/support'>Support</Link></li>
                <li className='nav-item'><Link to='/trips'>Trips</Link></li>
                <li className='nav-item'><Link to='/signin'>Sign in</Link></li>
            </ul>
        </nav>
        </div>
        <div className="app-header-btn">
        <button className='app_btn'>Get the app ⤓</button>
        </div>
    </header>
    <div className="container">
      <section className="home-main">
        <h1 className='main-title'>Explore your place to stay</h1>
        <SearchBar/>
        <div className="main-txt-group">
          <div className="txt-border"></div>
        <p className='main-text'>We provide a variety of the best lodging accommodations for those of you who need it.</p>
         </div>
        <h6 className='small-text'>Don't worry about the quality of the service.</h6>
      </section>
      </div>
      </div>
      <section className='hotels'>
        <div className="container">
          <div className='hotels-title'>
            <h1 className='hotels-main-title'>Hotels in your area</h1>
          </div>
         <div className="hotel-cards">
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
    </div>
    </>
  )
}

export default Home