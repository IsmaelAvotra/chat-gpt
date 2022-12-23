import React from 'react'
import './Navbar.css'

import { FaRobot } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <div className='logo'>
          <FaRobot />
          <h1>GPT-3</h1>
        </div>
        <div className='nav'>
          <nav>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>What is GPT?</a>
              </li>
              <li>
                <a href='/'>Open AI</a>
              </li>
              <li>
                <a href='/'>Case Studies</a>
              </li>
              <li>
                <a href='/'>Library</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='right'>
        <a href='/'>Sign in</a>
        <a href='/'>Sign Up</a>
      </div>
    </div>
  )
}

export default Navbar
