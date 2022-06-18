import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

const  HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/yared-teklewold/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/yared2112/' target="_blank"><FaGithub/></a>
        <a href='https://dribbble.com/yared2112' target="_blank"><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocials