import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='top'>
        <h3>
          Do you want to step in to the <br /> future before others
        </h3>
        <button>Request Early Access</button>
      </div>
      <div className='bottom'>
        <div className='left'>
          <h4>GPT-3</h4>
          <p>
            Crechterwoord K12 182 DK <br />
            Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className='right'>
          <div className='links'>
            <p>Links</p>
            <ul>
              <a href='/'>Overons</a>
              <a href='/'>Social Media</a>
              <a href='/'>Counters</a>
              <a href='/'>Contact</a>
            </ul>
          </div>
          <div className='company'>
            <p>Company</p>
            <ul>
              <a href='/'>Terms & Conditions</a>
              <a href='/'>Privacy Policy</a>
              <a href='/'>Contact</a>
            </ul>
          </div>
          <div className='touch'>
            <p>Get in touch</p>
            <ul>
              <a href='/'>Crechterwoord K12 182 DK Alknjkcb</a>
              <a href='/'>085-132567</a>
              <a href='/'>info@payme.net</a>
            </ul>
          </div>
        </div>
      </div>
      <div className='foot'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
