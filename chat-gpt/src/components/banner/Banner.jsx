import React from 'react'
import './Banner.css'
import members from '../../assets/members.svg'
import illustration from '../../assets/illustration.svg'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='left'>
        <h2>
          Let’s Build Something <br /> amazing with GPT-3 <br /> OpenAI
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className='email'>
          <input type='email' placeholder='Your email adress' />
          <button>Get started</button>
        </div>
        <div className='members'>
          <img src={members} alt='image members' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='right'>
        <img src={illustration} alt='illustration ia' />
      </div>
    </div>
  )
}

export default Banner
