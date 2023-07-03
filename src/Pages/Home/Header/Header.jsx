import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import logo from '../../../Images/logo.jpeg';
import logo from '../../../Images/renew.jpeg';
import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();
    const [active, setActive] = useState('')
    const handleClick = (link) => {
        setActive(link)
    }

    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="/home">
                        <img className="image-data" src={logo} alt="logo" />
                        {/* <span>ReNew</span> */}
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className={`list-item text-decoration-none ${active === 'home' ? 'active-item' : ''} `} onClick={() => handleClick('home')}>Home</Link>
                            <Link to="/about" className={`list-item text-decoration-none ${active === 'about' ? 'active-item' : ''} `} onClick={() => handleClick('about')}>About</Link>
                            <Link to="/service" className={`list-item text-decoration-none ${active === 'service' ? 'active-item' : ''} `} onClick={() => handleClick('service')}>Service</Link>
                            <Link to="/dentist" className={`list-item text-decoration-none ${active === 'dentist' ? 'active-item' : ''} `} onClick={() => handleClick('dentist')}>Dentist</Link>
                            <Link to="/contact" className={`list-item text-decoration-none ${active === 'contact' ? 'active-item' : ''} `} onClick={() => handleClick('contact')}>Contact</Link>
                            {user.email 
                            ?
                            <button type="button" className="btn btn-info" onClick={logout}>Log Out</button>
                            :
                            <Link to="/login" type="button" className="btn btn-info">Login</Link>
                            }
                            {user.email &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;