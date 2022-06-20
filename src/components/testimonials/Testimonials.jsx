import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avt1,
    name: 'Nahom Endale',
    company: 'Reboot Consult',
    review: 'Yared works extremely hard and is incredibily patient when conducting research. The work has been excellent thus far. I hope to continue working with him in the future.'  
  },
  {
    avatar: Avt2,
    name: 'Nejib Musema',
    company: 'Reboot Consult',
    review: "It has been a real pleasure working with Yared. He has been very professional and very clear in all communications."
  },
  {
    avatar: Avt3,
    name: 'Henok Teklewold',
    company: 'Quantum EM Engineering',
    review: "I’ve been using Yared’s services for years and on multiple projects. He’s my “go to” guy. I can’t say enough about the professionalism, attention to detail, and vast technical knowledge he possesses on multiple levels."
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, company, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <h6 className='client__name'>{company}</h6>
              <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials