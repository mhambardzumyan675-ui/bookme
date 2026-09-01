import React from 'react'
import './Home.scss'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className='home-page-bcg'>
      <div className='container'>
      <header className='header'>
        <div className='page-logo'>
          <img className='logo-pic' src='./images/logo.png'></img>
        </div>
        <nav className='header-navlist'>
            <ul className='navlist'>
                <li className='nav-item'><Link to='/list' >List your property</Link></li>
                <li className='nav-item'><Link to='/support'>Support</Link></li>
                <li className='nav-item'><Link to='/trips' >Trips</Link></li>
                <li className='nav-item'><Link to='/signin' >Sign in</Link></li>
            </ul>
        </nav>
        <div><button className='app_btn' >Get the app</button></div>
    </header>
    </div>
    </div>
    </>
  )
}

export default Home