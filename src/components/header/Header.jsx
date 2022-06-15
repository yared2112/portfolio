import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yared Teklewold</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        
      </div>
    </header>
  )
}

export default Header