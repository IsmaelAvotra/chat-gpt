import React from 'react'
import './Possibilities.css'

import feature from '../../assets/feature.svg'

const Possibilities = () => {
  return (
    <section className='possibilities-section'>
      <div className='content'>
        <div className='image'>
          <img src={feature} alt='feature image' />
        </div>
        <div className='text'>
          <span>Request Early Access to Get Started</span>
          <h3>The possibilities are beyond your imagination</h3>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a href='/'>Request Early Access to Get Started</a>
        </div>
      </div>
      <div className='get-started'>
        <div className='left'>
          <span>Request Early Access to Get Started</span>
          <p>Register today & start exploring the endless possiblities.</p>
        </div>
        <div className='right'>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Possibilities
