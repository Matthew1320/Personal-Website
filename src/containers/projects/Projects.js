import React from 'react';
import './projects.css';

import {Project} from '../../components';
import {proj1, proj2, proj3, proj4, proj5 } from './imports';

const Projects = () => {
  return (
    <div className='my__projects section__padding' id='projects'>
      <div className='my__projects-heading'>
        <h1 className='gradient__text'>My Projects</h1>
      </div>
      <div className='my__projects-container'>
        <div className='my__projects-container_groupA'>
          <Project imgUrl={proj1} date='May 18, 2023' title='Road Sign Detection' url={'https://github.com/Matthew1320/Road-Sign-Detection'} />
        </div>
        <div className='my__projects-container_groupB'>
          <Project imgUrl={proj2} date='Sept 26, 2022' title='Backpropagation Engine' url={'https://github.com/Matthew1320/BackProp-Public/tree/main'} />
          <Project imgUrl={proj3} date='July 26, 2023' title='Bird Call Recognition' url={'https://github.com/Matthew1320/Bird-Call-Recognition'} />
          <Project imgUrl={proj4} date='June 19, 2023' title='Personal Website' url={'https://github.com/Matthew1320/Personal-Website'} />
          <Project imgUrl={proj5} date='Dec 5, 2021' title='Wheel of Fortune' url={'https://github.com/Matthew1320/Wheel-of-Fortune-Public'} />
        </div>
      </div>
    </div>
  )
}

export default Projects