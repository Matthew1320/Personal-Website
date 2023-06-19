import React from 'react';
import './App.css';

import { Contact, Courses, Header, Projects} from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
           <Navbar />
          <Header />
      </div>
      <Courses />
      <Projects />
      <Contact />
    </div>
  )
}

export default App