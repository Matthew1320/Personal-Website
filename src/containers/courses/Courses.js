import React, {useState} from 'react';
import './courses.css';
import { RiCloseLine, RiComputerLine } from 'react-icons/ri';
import { BiMath } from 'react-icons/bi';
import { GiArtificialIntelligence } from 'react-icons/gi';

const Math = () => (
  <>
    <p>•Discrete Mathematics</p>
    <p>•Linear Algebra</p>
    <p>•Number Theory</p>
    <p>•Combinatorics</p>
    <p>•Analysis</p>
  </>
)

const CS = () => (
  <>
    <p>•Analysis of Algorithms</p>
    <p>•OOP and Data Structures</p>
    <p>•Functional Programming</p>
    <p>•Operating Systems</p>
    <p>•Computer System Organization and Programming</p>
  </>
)

const ML = () => (
  <>
    <p>•Intro to Machine Learning</p>
    <p>•Large Scale Machine Learning</p>
    <p>•Math Foundations of Machine Learning</p>
    <p>•Computer Vision</p>
  </>
)

const Courses = () => {
  const [toggleMath, setToggleMath] = useState(false);
  const [toggleCS, setToggleCS] = useState(false);
  const [toggleML, setToggleML] = useState(false);

  return (
    <div className='my__courses' id='courses'>
      <div className='my__courses-title'>
        <h1>Courses</h1>
        <p>Listed below is are collections of relevant courses split up by category that I have taken or I am currently taking</p>
      </div>
      <div className='my__courses-list'>
        <div className='my__courses-list_math'>
          <h2>Math</h2>
          {toggleMath
            ? <RiCloseLine color="pink" size={27} onClick={() => setToggleMath(false)}/>
            : <BiMath color="pink" size={27} onClick={() => setToggleMath(true)}/>
          }
          {toggleMath && (
            <div className='my__courses-list_math-container scale-up-center'>
              <div className='my__courses-list_math-container_links'>
                <Math />
              </div>
            </div>
          )}
        </div>
        <div className='my__courses-list_cs'>
          <h2>Computer Science</h2>
          {toggleCS
            ? <RiCloseLine color="pink" size={27} onClick={() => setToggleCS(false)}/>
            : <RiComputerLine color="pink" size={27} onClick={() => setToggleCS(true)}/>
          }
          {toggleCS && (
            <div className='my__courses-list_cs-container scale-up-center'>
              <div className='my__courses-list_cs-container_links'>
                <CS />
              </div>
            </div>
          )}
        </div>
        <div className='my__courses-list_ml'>
          <h2>Machine Learning</h2>
          {toggleML
            ? <RiCloseLine color="pink" size={27} onClick={() => setToggleML(false)}/>
            : <GiArtificialIntelligence color="pink" size={27} onClick={() => setToggleML(true)}/>
          }
          {toggleML && (
            <div className='my__courses-list_ml-container scale-up-center'>
              <div className='my__courses-list_ml-container_links'>
                <ML />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Courses