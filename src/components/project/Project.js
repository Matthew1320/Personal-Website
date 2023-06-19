import React from 'react';
import './project.css';

const Project = ({imgUrl, date, title, url}) => {
  return (
    <div className='my__projects-project'>
      <div className='my__projects-project-image'>
        <img src={imgUrl} alt='blog' />
      </div>
      <div className='my__projects-project-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p><a href={url}>Learn More</a></p>
      </div>
    </div>
  )
}

export default Project