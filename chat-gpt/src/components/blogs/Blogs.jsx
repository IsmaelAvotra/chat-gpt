import React from 'react'
import './Blogs.css'
import { blogsData } from './data'

const Blogs = () => {
  return (
    <section className='blogs'>
      <div className='left'>
        <div className='blog'>
          <div className='top'>
            <img src={blogsData[0].image} alt='blog image' />
          </div>
          <div className='bottom'>
            <span>{blogsData[0].date}</span>
            <p>{blogsData[0].title}</p>
            <a href='/'>Read Full Article</a>
          </div>
        </div>
      </div>
      <div className='right'>
        {blogsData.slice(1, 5).map(({ id, title, image, date }) => {
          return (
            <div className='blog' key={id}>
              <div className='top'>
                <img src={image} alt='blog image' />
              </div>
              <div className='bottom'>
                <span>{date}</span>
                <p>{title}</p>
                <a href='/'>Read Full Article</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Blogs
