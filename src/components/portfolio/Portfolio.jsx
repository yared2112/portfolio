import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>

     <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1}/> 
        </div>
        <h3>Expense Tracker</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/yared2112" className='btn' target='_blank'>Github</a>
          <a href="http://expense-tracker-yared2112.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>  
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG4} alt="" /> 
        </div>
        <h3>ToDo List</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/yared2112" className='btn' target='_blank'>Github</a>
          <a href="https://todo-list-cfg1c419z-yared2112.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>  
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG3} alt="" /> 
        </div>
        <h3>Resume Builder</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/yared2112" className='btn' target='_blank'>Github</a>
          <a href="http://resume-builderr-six.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>  
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG6} alt="" /> 
        </div>
        <h3>Messaging App</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/yared2112" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>  
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG5} alt="" /> 
        </div>
        <h3>Task Tracker</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/yared2112" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>  
        </div>
      </article>      
     </div>
    </section>
  )
}

export default Portfolio