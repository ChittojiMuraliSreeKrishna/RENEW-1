import React from 'react'

const Home = (props) => {
  return (
    <div className='home'>
      <div className='section hero'>
        <div className="container">

          <div className="hero-content">

            <p className="section-subtitle">Welcome To Kalon</p>

            <h1 className="h1 hero-title">We Are Best Dental Service</h1>

            <p className="hero-text">
              Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus
              sapien, cursus sed
              nisl tristique, commodo gravida lectus non.
            </p>

            <div className="banner-btn m-sm-auto">
              <button className="btn" onClick={() => props.openAppoint(true)}>Appoinment</button>
            </div>
          </div>
          <figure className="hero-banner">
            <img src={require('../Assets/Images/hero-banner.png')} width="587" height="839" alt="hero banner" className="w-100" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Home