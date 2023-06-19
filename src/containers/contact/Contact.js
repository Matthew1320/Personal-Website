import React from 'react';
import './contact.css';

import linkedin from '../../assets/linkedin.png';
import email from '../../assets/gmail.png'

const Contact = () => {
  return (
    <div className='my__contact' id='contact'>
      <div className='my__contact-title'>
        <h1>Contact Me!</h1>
        <p>If you have any question or if you want to learn more, feel free to reach out using the following links</p>
      </div>
      <div className='my__contact-links'>
        <div className='my__contact-links_linkedin'>
          <a href='https://www.linkedin.com/in/matthewigonzalez/'><img src={linkedin} alt='linkedin' /></a>
        </div>
        <div className='my__contact-links_email'>
          <a href='mailto:mig42@cornell.edu'><img src={email} alt='email' /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact