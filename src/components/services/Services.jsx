import React from 'react'
import './services.css'
import {GoCheck} from 'react-icons/go'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>To improve the visible design of an application</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Raise user satisfaction, decrease user churn, and ensure user-based company goals</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Design, build, and maintain highly reusable JavaScript, HTML and CSS code</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Proficient on using Git version control</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Proficienct on using the command line</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>HTML to lay out a documents general structure and content</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>CSS for styling</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>JavaScript for situations that require advanced interactivity</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>AJAX to update specific areas of a website without having to refresh the entire page</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Libraries and Frameworks to provide improved modularity and power</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Custom iOS app development</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Custom Android app development</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Mobile UX and UI design</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Maintenance and support</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Mobile app modernization</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services