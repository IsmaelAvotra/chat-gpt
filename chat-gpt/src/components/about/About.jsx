import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='what-is'>
        <div className='title'>
          <h3 className='before'>What is GPT-3</h3>
        </div>
        <div className='description'>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>
      <div className='possibilities'>
        <div className='title'>
          <h3>
            The possibilities are beyond <br /> your imagination
          </h3>
          <a href='/'>Explore The Library</a>
        </div>
        <div className='possibilities-content'>
          <div className='possibility'>
            <h4 className='before'>Chatbots</h4>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div className='possibility'>
            <h4 className='before'>Knowledgebase</h4>
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments.
            </p>
          </div>
          <div className='possibility'>
            <h4 className='before'>Education</h4>
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
