import React from 'react'
import './Logos.css'

// import all logos
import google from '../../assets/google.svg'
import slack from '../../assets/slack.svg'
import atlassian from '../../assets/atlassian.svg'
import dropbox from '../../assets/dropbox.svg'
import shopify from '../../assets/shopify.svg'

const Logos = () => {
  return (
    <section className='logos'>
      <img src={google} alt='logo google' />
      <img src={slack} alt='logo slack' />
      <img src={atlassian} alt='logo atlassian' />
      <img src={dropbox} alt='logo dropbox' />
      <img src={shopify} alt='logo shopify' />
    </section>
  )
}

export default Logos
