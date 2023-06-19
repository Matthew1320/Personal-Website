import React from 'react';
import './header.css';
import profile from '../../assets/header.png';

const Header = () => {
  return (
    <div className='my__header section__padding' id='aboutme'>
      <div className='my__header-content'>
        <h1>Hi! I’m Matthew Gonzalez 👋</h1>
        <p>
        I am currently a senior at Cornell University majoring in computer science with a minor in math. Specifically, I have a strong interest in machine learning and applying mathematics to improve performance.
        </p>
      </div>
      <div className='my__header-image'>
        <img src={profile} alt='profile'/>
      </div>
    </div>
  )
}

export default Header