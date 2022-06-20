import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>teklewold.yared21@gmail.com</h5>
            <a href="mailto:teklewold.yared21@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@ur2b1</h5>
            <a href="https://core.telegram.org/api/" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+251938032629</h5>
            <a href="https://api.whatsapp.com/send?phone+251938032629" target="_blank">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact