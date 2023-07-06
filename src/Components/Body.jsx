import React, { useEffect, useState } from 'react'
import Home from './Home'
import Services from './Services'
import About from './About'
import Blog from './Blog'
import Appoinment from './Appointment'
import '../Assets/Styles/Body.css'

const Body = () => {

  const [appoint, setAppoint] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppoint(true);
    }, 5000);
  }, []);

  return (
    <div>
      <div id='home'>
        <Home openAppoint={setAppoint} />
      </div>
      {appoint ? (
        <div className="appoint-container">
          <div className="appoint-subcontainer">
            <Appoinment onClose={() => setAppoint(!appoint)} />
          </div>
        </div>
      ) : (
        <div>
          <div id='service'>
            <Services />
          </div>
          <div id='about'>
            <About />
          </div>
          <div id='blog'>
            <Blog />
          </div>
        </div>
      )}
    </div>
  )
}

export default Body