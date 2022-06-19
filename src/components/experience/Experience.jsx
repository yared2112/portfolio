import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

    <div className='container experience__container'>
      <div className="container experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <HiBadgeCheck className='expereience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <HiBadgeCheck className='expereience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <HiBadgeCheck className='expereience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <HiBadgeCheck className='expereience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      <div className="container experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck className='expereience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Little</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='expereience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiBadgeCheck className='expereience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Working On It</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience