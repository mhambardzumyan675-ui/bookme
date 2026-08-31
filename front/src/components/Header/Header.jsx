import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div>
        <nav className='header-navlist'>
            <ul className='navlist'>
                <li className='list'>List your property</li>
                <li className='support'>Support</li>
                <li className='trips'>Trips</li>
                <li className='signin'>Sign in</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header