import React, { useEffect, useState } from 'react'

const Header = (props) => {

  const [toggleNav, setToggleNav] = useState(false)
  const [active, setActive] = useState('home')

  const handleClick = (link) => {
    setActive(link)
  }

  return (
    <header className="header">
      <div className={`header-bottom ${props.isHeaderActive ? ' active' : ''}`}>
        <div className="container">
          <a href="#" className="logo">
            <img src={require('../Assets/Images/KALON.png')} className='header-png' />
          </a>

          <nav className={`navbar container ${toggleNav ? "active" : ""}`} data-navbar>
            <ul className="navbar-list">

              <li>
                <a href="#home" className={`navbar-link ${active === 'home' ? 'active-item' : ''}`} onClick={() => {
                  setToggleNav(!toggleNav)
                  setActive('home')
                }}>Home</a>
              </li>

              <li>
                <a href="#service" className={`navbar-link ${active === 'services' ? 'active-item' : ''}`} onClick={() => {
                  setToggleNav(!toggleNav)
                  setActive('services')
                }}>Services</a>
              </li>

              <li>
                <a href="#about" className={`navbar-link ${active === 'about' ? 'active-item' : ''}`} onClick={() => {
                  setToggleNav(!toggleNav)
                  setActive('about')
                }}>About Us</a>
              </li>

              <li>
                <a href="#blog" className={`navbar-link ${active === 'blog' ? 'active-item' : ''}`} onClick={() => {
                  setToggleNav(!toggleNav)
                  setActive('blog')
                }}>Blog</a>
              </li>

              <li>
                <a href="#contact" className={`navbar-link ${active === 'contact' ? 'active-item' : ''}`} onClick={() => {
                  setToggleNav(!toggleNav)
                  setActive('contact')
                }}>Contact</a>
              </li>

            </ul>
          </nav>

          <button className="btn">Book appointment</button>

          <button className="nav-toggle-btn" aria-label="Toggle menu" onClick={() => setToggleNav(!toggleNav)}>
            {toggleNav ?
              <ion-icon name="close-sharp" aria-hidden="true" className="close-icon"></ion-icon>
              :
              <ion-icon name="menu-sharp" aria-hidden="true" className="menu-icon"></ion-icon>
            }
          </button>

        </div>
      </div>

    </header >

  )
}

export default Header