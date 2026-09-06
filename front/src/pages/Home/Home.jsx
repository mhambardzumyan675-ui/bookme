import React from 'react'
import './Home.scss'
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";


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
    </div>
    </>
  )
}

export default Home